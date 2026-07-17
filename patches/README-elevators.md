# Elevator implementation for wizard-tower-builder

This agent run was attached to `katerberg/website` and could not push to
`katerberg/wizard-tower-builder`. Apply the patch there:

```bash
cd /path/to/wizard-tower-builder
git checkout main
git pull
git checkout -b cursor/elevator-implementation-c998
git am path/to/wizard-tower-builder-elevators.patch
git push -u origin cursor/elevator-implementation-c998
```

Or copy the commit from the cloud agent workspace clone:
`/workspace/wizard-tower-builder` on branch `cursor/elevator-implementation-c998`
(commit `849a0c1`).

Implemented: elevator infra shafts, shared cars (cap 6), call-to-idle,
mid-route pickup, no free vertical climb, docs/UI/tests.
