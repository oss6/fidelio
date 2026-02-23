# Deploy to GitHub Pages

To host this project on GitHub Pages, follow these steps:

## 1. Prepare for Deployment
GitHub Pages works best with static sites. Since this is a Vite project, you need to build it first.

Run this in the Replit shell:
```bash
npm run build
```

## 2. Push to GitHub
If you haven't already, connect your project to a GitHub repository:
1. Click the **Git** icon in the left sidebar.
2. Create a new repository and push your code.

## 3. Configure GitHub Actions (Recommended)
Create a file at `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 4. Enable GitHub Pages
1. Go to your repository on GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

## 5. Handling Routing
Because this is a Single Page Application (SPA), refreshing a subpage (like `/privacy`) on GitHub Pages will result in a 404. 

**Fix:** I have created a `client/public/404.html` file which is a copy of your `index.html`. This is a common workaround for SPAs on GitHub Pages.
