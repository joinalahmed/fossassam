addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const commonHeaders = { 'content-type': 'application/json;charset=UTF-8' }
const sgToken = "<API_TOKEN>"
const ghToken = "<API_TOKEN>"

/**
 * Respond with worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let response
  if (request.method === 'POST') {
    const body = await request.json()

    // validate body
    if (body.username == undefined || body.email == undefined ) {
      let err = { err: "Bad request" }
      response = new Response(JSON.stringify(err), { status: 400, headers: commonHeaders})
      return response
    }

    // GitHub repo-dispatch
    await makeRepoDispatch(body)

    // SendGrid email
    await sendMail(body)

    response = new Response('{"body":"Registered."}', { status: 201, headers: commonHeaders})
  } else {
    let err = { err: "Expected POST" }
    response = new Response(JSON.stringify(err), { status: 405, headers: commonHeaders})
  }
  return response
}

async function makeRepoDispatch(requestBody) {
  const ghRepo = "buildandtell/fossassam-public-members"
  console.log(requestBody)
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
  console.log(rawResponse.status)
  console.log(rawResponse.statusText)
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
  console.log(rawResponse.status)
  console.log(rawResponse.statusText)
}