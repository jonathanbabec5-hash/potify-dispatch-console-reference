# POTIFY Dispatch Console

[Complete repository directory tree](docs/DIRECTORY.md)

## One slot, two people, one preventable duplicate

An editor sees a blank receipt at the end of a long day. Is that a reason to send again? The Dispatch Console gives a team a safe place to rehearse the much less dramatic, and much more useful, answer: find out who owns the slot first.

The [local console](public/index.html) stores fictional records in the browser. Read its [checks](tests/project.test.mjs) alongside a manual rehearsal: reserve a slot, let a second editor find it, then add a receipt to the first record. A local state change is visible without sending a real message.

Describe the exact screen or word that would tempt an editor to replay an uncertain post. Include the steps using made-up copy. The private dispatch console, connected accounts and actual publishing records are outside this example.

**Local reference app.** Let a team audit what was planned, approved, sent and verified without replaying a post.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Try a dummy dispatch record locally. Open http://127.0.0.1:8000/ in a browser. 

### Developer entry points

The standalone console persists local records in browser storage and separates exact-slot ownership from manual receipts and verified links. Explore `public/`, `tests/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

### Release scope

The private console remains private. This empty demo contains no account connection, post queue or operating logs. potify-dispatch-console.zip. Author-created standalone release with an empty post list and empty activity log. Uses local browser storage. No live workspace data is supplied.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
