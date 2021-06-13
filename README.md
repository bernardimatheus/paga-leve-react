# Serverless Framework React + CloudFront (Serverless Component)

You can check the project at: https://d12mw68ot7rxsr.cloudfront.net

This repository was made with Serverless Template, following the documentation.

## Usage

### Deployment

This example is made to work with the Serverless Framework dashboard, which includes advanced features such as CI/CD, monitoring, metrics, etc.

In order to deploy with dashboard, you need to first login with:

```
serverless login
```

install dependencies with:

```
npm install
```

After that, just merge any branch with `main` and the deployment will be done (Serverless CI/CD)

### Tools

- Animations: React Lottie.
- CSS: Bulma CSS (react-bulma-components).
- HTTP: Axios.
- Navigation: React-router-dom.

### Local development

```bash
npm install
```

Following by:

```bash
npm start
```

The REACT_APP_API_URL will be set to `http://localhost:3000/dev` for local development
