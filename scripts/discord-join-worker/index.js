addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const commonHeaders = { 'content-type': 'application/json;charset=UTF-8' }
const sgToken = "<API_TOKEN>"
const ghToken = "<API_TOKEN>"

function addcors(r)  {
  r.headers.set('Access-Control-Allow-Origin', '*')
  r.headers.set("Access-Control-Allow-Methods", "POST","OPTIONS")
  r.headers.set('Vary', 'Origin')
  r.headers.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
  return r
}

/**
 * Respond with worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url)
  let response
  // Add CORS headers


  if (request.method === 'POST') {
    const body = await request.json()
    // validate body
    if (body.username == undefined || body.email == undefined ) {
      let err = { err: "Bad request" }
      response = new Response(JSON.stringify(err), { status: 400, headers: commonHeaders})
      return addcors(response)
    }

    try {
      // GitHub repo-dispatch
      await makeRepoDispatch(body)
      // SendGrid email
      await sendMail(body)
    } catch(e) {
      response = new Response(JSON.stringify(`{"err":"${e.message}"}`), { status: 500, headers: commonHeaders})
      return addcors(response)
    }
    // successful return
    response = new Response('{"body":"Registered."}', { status: 201, headers: commonHeaders})
  } else if (request.method === 'OPTIONS') {
    response = new Response(JSON.stringify(["OK"]), { status: 200, headers: commonHeaders})
  } else {
    let err = { err: "Expected POST" }
    response = new Response(JSON.stringify(err), { status: 405, headers: commonHeaders})
  }

  return addcors(response)
}

async function makeRepoDispatch(requestBody) {
  const ghRepo = "buildandtell/fossassam-public-members"
  const rawResponse = await fetch(`https://api.github.com/repos/${ghRepo}/dispatches`, {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github.everest-preview+json',
      'Content-Type': 'application/json',
      'User-Agent': 'fossassam-discord-worker',
      'Authorization': `token ${ghToken}`
    },
    body: JSON.stringify({
     event_type: "add_user",
     client_payload: {
       "username": requestBody.username,
       "email": requestBody.email
     }
    })
  })
  if (rawResponse.status !== 204){
    throw "repository-dispatch event was not created"
  }
}

async function sendMail(requestBody) {
  const apiUrl = "https://api.sendgrid.com/v3/mail/send"
  const subjectLine = "FossAssam Discord Group Invitation 🎉"
  const contentBody = `Hello @${requestBody.username}!

Here's your invitation link to the discord group, we would suggest downloading the mobile phone app for discord aswell.

Invitation link:
https://discord.gg/5TrVGKU
  
Welcome you to a happy and friendly family! 🤩`
  const rawResponse = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sgToken}`
    },
    body: JSON.stringify(
      {
        "personalizations": [{"to": [{"email": requestBody.email}]}],
        "from": {"email": "fossassam@gmail.com"},
        "subject": subjectLine,
        "content": [{"type": "text/plain", "value": contentBody}],
      }
    )
  })
  if (rawResponse.status !== 202){
    throw "email could not be sent"
  }
}