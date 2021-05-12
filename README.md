# Signing a Json Web Token with RS256 and SHA256

JSON Web Token (JWT) is an open standard [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

This is a [Express](https://expressjs.com/) project.

## Getting Started

First, run the development server:

```bash
npm install
# and
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.