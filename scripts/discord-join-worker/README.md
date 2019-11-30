# 👷 FossAssam Discord Join Worker

**Live worker:** [discord-join.fossassam.workers.dev](https://discord-join.fossassam.workers.dev)

---

This worker takes in `POST` request with json body `{username,email}` and sends a discord invitation email to the given email and adds the email and username to [fossassam-public-members](https://github.com/buildandtell/fossassam-public-members)

Replace these two lines with actual api keys.

```
const sgToken = "<API_TOKEN>"
const ghToken = "<API_TOKEN>"
```

## Instructions

- Install the [wrangler cli](https://github.com/cloudflare/wrangler)
- Run `wrangler preview`
