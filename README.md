## Homepage for FossAssam

It is using hugo static site generator.


## Local development
```
hugo serve
```

## Publishing
Netlify is configured to do automatic builds on any push made to this repository.

## Scripts
- `discord-join-worker` : This is a cloudflare worker, that handles email sending and sending a repository dispatch hook request to github to update [fossassam-public-members](https://github.com/buildandtell/fossassam-public-members) with user details.

