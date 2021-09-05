# analog-clock-react

## Description

A simple web application with an analog clock on the home page. The clock returns the current time and updates it every second. Below is the date and time in digital format.

## Resources

* [Clock.png](https://drive.google.com/file/d/1DBybco2DjKd4elgxZcJ8-zMRUF0ndIHW/view)

## Configuration instructions

This app has been developed with [create-react-app](https://github.com/facebook/create-react-app)

### Build production

```shell
git clone https://github.com/agustinbarbalase/weather-app.git
npm install
npm build
```

### Dev

```shell
git clone https://github.com/agustinbarbalase/weather-app.git
npm install
npm start
```

## Deploy on Vercel

This application was deployed in Vercel with Github actions. Here is the action and [here](https://analog-clock-react-eta.vercel.app/) is the deployment page

```yml
name: Deploy on Vercel

on:
  push:
    branches:
    - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## License

This app has a [MIT License](https://opensource.org/licenses/MIT)
