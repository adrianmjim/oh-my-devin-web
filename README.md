# Oh My Devin — website

The public website for Oh My Devin: a landing page and the product
documentation. Authored as [Mintlify](https://mintlify.com/) content and
hosted on the Mintlify platform.

The site is a single Mintlify site: the landing page at `/` (a `custom` layout
page) and the product documentation alongside it. Its structure lives in
`docs.json`; pages are MDX.

## Requirements

- Node.js >= 22.14 (only to run the Mintlify CLI ad hoc; nothing is installed
  as a project dependency)

## Local preview

The repository carries no dependency manifest. Invoke the Mintlify CLI ad hoc
at the pinned version — `mint@4.2.729`:

```bash
npx mint@4.2.729 dev            # local preview at http://localhost:3000
npx mint@4.2.729 broken-links   # verify internal links resolve
```

## Deployment

The Mintlify platform builds the site from this repository and redeploys on
every push to `main` — there is no build or deploy tooling in the repository.
Link integrity is enforced before merge by `.github/workflows/link-check.yml`,
which runs `mint broken-links` at the pinned CLI version on pull requests and
pushes to `main`.

## License

[MIT](LICENSE)
