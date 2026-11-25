# November 25, 2026 · POTIFY Dispatch Console

**Question.** Let a team audit what was planned, approved, sent and verified without replaying a post.

**Source and change.** potify-dispatch-console.zip. Author-created standalone release with an empty post list and empty activity log. Uses local browser storage. No live workspace data is supplied.

**Observed result.** The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

**Next acceptance check.** Using fictional entries, reserve a slot, attempt a duplicate and record a manual receipt.

**Owner and decision.** Chance owns the public release and approves campaign copy. The private console remains private. This empty demo contains no account connection, post queue or operating logs.

This dated record describes the developer package. Verify remote commit and tree in the publication receipt before announcing a GitHub release.
