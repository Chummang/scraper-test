
## Getting Started


After cloning, you can download dependencies by running : npm install 

then run either,
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


For this project I used:

- NextJs for server-side rendering ad React Components
- Tailwind CSS for styling
- Next-Auth for authentication with credential provider and
- MongoDB to store user information


Data Scraping and Preparation:  
I used a library called puppeteer-core which run in the headless and bundled serverless functions on Vercel can't exceed 50MB and Vercel was my choise for deployment.
However, puppeteer-core comes with its own set of drawback and I was unable to implement the feature to scrape PDF documents.


Basic User Authentication System:
I used Next-Auth and bcrypt for authentication and successfully implemented Register and Login functionality 

Organization and Sharing Features: 
I have yet to implement organization and sharing features.










