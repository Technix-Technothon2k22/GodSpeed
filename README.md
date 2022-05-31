<p align="center">
  <img src="/public/logo/H.png" alt="logo" align="center" width="200" height="200" />
</p>

<h2 align="center"> Hackarena </h2>
<h5 align="center"> One step solution to managing hackathons </h5>

---

![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)
![Issues](https://img.shields.io/github/issues/GeoBrodas/hackarena?atomic-design-ui.svg?)

## About

Hackarena is a platform built to help students and companies to organize hackathons. It is a single page application that allows you to create, manage and share your hackathons.

## Our Mission

To deliver a robust experience with no compromises to the user experience. We aim to provide a platform for hackathons to be organized and run by the community.

## Tech Stack

- [Nextjs](https://nextjs.org)
- [Chakra-UI](https://chakra-ui.com)
- [MongoDb](https://www.mongodb.com)

## Roadmap

> A comprehensive roadmap is available on this [Notion Page](https://georgey.notion.site/Technothon-22-d8278fe17bd34a75809b66a5d0fa24aa)

- [ ] Fix bug in hackathon form page (in the FaQs section )
- [ ] Protected API routes ( **Critical** )
- [ ] 100% responsiveness
- [ ] Expand team?
- [ ] Bug fixes
- [ ] Improved User experience by delivering toast notifications on success/error
- [ ] Add a form builder to accept team registrations.
- [ ] Send email updates to participants if registered/interested.
- [x] Block duplicate entries
- [x] GitHub username validation on Hackathon details page
  > Sice the form is publicly available on the `/hackathons/[eventId]` page, we decided to inlcude a validation on the GitHub username field. In this way only valid entries will be selected.

## Installation Setup

1. Clone the repository.

```bash
git clone https://github.com/GeoBrodas/hackarena.git
```

2. Run,

```bash
npm install
```

3. Create a file in the root - `.env.local` and paste in the following env variables

```
NEXTAUTH_URL=http://localhost:3000/
NEXT_PUBLIC_BASE_URL=http://localhost:3000
GITHUB_ID=<github_id>
GITHUB_SECRET=<github_secret>
JWT_SECRET=<Run node -e "console.log(crypto.randomBytes(32).toString('hex'))" in the terminal>
MONGO_URI=<Mongodb_uri string>
```

## Authors

- [@GeoBrodas](https://www.github.com/GeoBrodas)
- [@gaurangtari](https://www.github.com/gaurangtari)

## Acknowledgements

- [Chakra-UI](https://chakra-ui.com/)
- [Team Cursor](https://www.facebook.com/gecteamcursor/)
