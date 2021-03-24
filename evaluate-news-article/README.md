## Evaluate News Article  with Natural Language Processing


This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Installation
Make sure Node and npm are installed.

1. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

2. Configure environment variables using dotenv package
    1. Install the dotenv package
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with Global Variables.

3. Start the project

### To Run Project

- cd into your new folder and run in prod mode
- `npm install`
- `npm run build-prod to generate a dist folder for prod`
- `npm run start to run the Express server on port 8076`

**Note:** The web page can be accessed with `localhost:8076`

4. Open browser at http://localhost:8076/
