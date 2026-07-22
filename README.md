# Oh My Devin — website

The public website for Oh My Devin: a landing page and the product
documentation. Built with [Docusaurus](https://docusaurus.io/) and deployed to
GitHub Pages.

## Requirements

- Node.js >= 22.14
- pnpm (development only)

## Development

Development, build, and dependency management run on pnpm at the version pinned
in `package.json` (`packageManager`). Every direct dependency is pinned to an
exact version and the generated lockfile is not committed.

```bash
pnpm install
pnpm start   # local dev server
pnpm build   # static production build into build/
```

## Deployment

Pushes to `main` build the site and publish it to GitHub Pages through the
workflow in `.github/workflows/deploy.yml`.

## License

[MIT](LICENSE)
