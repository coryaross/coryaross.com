# Deployment Notes

Production canonical URL: `https://www.coryaross.com/`

## GitHub

1. Authenticate GitHub CLI:
   ```bash
   gh auth login -h github.com
   ```
2. Initialize Git, commit, and create a GitHub repository.

## Vercel

1. Install or authenticate Vercel CLI, or import the GitHub repo from the Vercel dashboard.
2. Use the project root as the deployment directory.
3. No build command is required.
4. Add both domains:
   - `www.coryaross.com`
   - `coryaross.com`
5. Set `www.coryaross.com` as the canonical production domain.

The included `vercel.json`, `robots.txt`, `sitemap.xml`, and metadata in `index.html` are already prepared for deployment.
