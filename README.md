
`CDC-Homepage` is a base for creating modern product landing pages. Built with Next.js and Tailwind CSS, it offers a modern foundation for quickly launching homepages for your products.

You can see the GH Pages' live build [here](https://codesign-cloud.github.io/cdc-next-static-homepage-base/).

### Clone from base repo

``````
# Clone the base repo for a new homepage
git clone https://github.com/codesign-cloud/cdc-next-static-homepage-base.git projectX
cd projectX
npm i 
npm run dev
``````
You are now ready to start developing your own static homepage.

--------------------------------------------------------------------

## Prerequisites
- Ensure that GitHub Pages is activated for your new repository on GH. Navigate to GitHub > Settings > Pages > Build and deployment > Source and select GitHub Actions.

--------------------------------------------------------------------
### Add base repo as remote (if required)

``````
# Change the origin to the new project's repo
git remote set-url origin https://github.com/userX/projectX.git
``````

``````
# Add this base repo as a secondary remote named 'base'
git remote add base https://github.com/codesign-cloud/cdc-next-static-homepage-base.git
``````

### Updating your fork with changes from the Base Repository (if required)
`````
# Fetch the latest changes from the base repository
git fetch base
`````

`````
# Merge the fetched changes into your local main branch
git merge base/main

# In case you encounter the "fatal: refusing to merge unrelated histories" error,
# you can use the --allow-unrelated-histories flag to bypass this.
# ⚠️ Use this flag carefully, as it may lead to complex merge conflicts.
git merge base/main --allow-unrelated-histories

# To prioritize and accept all incoming changes from the base repository, use:
# ⚠️ Again, use this flag carefully, as it may lead to complex merge conflicts.
git merge -X theirs base/main --allow-unrelated-histories

`````

------------------------------------

## Configuring Paths for GitHub Pages Deployment

**Note:** This configuration is only necessary if your GitHub Pages site is hosted at `username.github.io/your-repo-name`. If you are using a custom domain or subdomain, this step is not required, as / points to the root.

When using static assets, such as images with the `img` tag, that are located in the `/assets/` directory within your public folder, you need to adjust the base URL accordingly.

To set this up, follow these steps:
1. Navigate to your repository on GitHub.
2. Go to `Settings` > `Secrets and variables` > `Actions` > `Repository secrets`.
3. Click on `New repository secret`.
4. Add a new secret named `BASE_PATH` with the value `https://username.github.io/your-repo-name` (no trailing slash)

You can then utilize this base path in your JSX pages as shown below:

```jsx
import { basePath } from '@/app/basePath';
...
..
    <img src={`${basePath}/assets/logo.svg`} alt="Logo" />
```

------------------------------------ 

### Getting Started (Next.js Readme)

First, run the development server:

```bash
npm run dev || yarn dev || pnpm dev || bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)
