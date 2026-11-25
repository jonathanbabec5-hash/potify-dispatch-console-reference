# POTIFY Dispatch Console
## Whitepaper · public developer edition

**November 25, 2026 · Local reference app**

### Goal and audience

Let a team audit what was planned, approved, sent and verified without replaying a post. The immediate audience is creators coordinating X, Telegram and publishing queues.

### Design and implementation

The standalone console persists local records in browser storage and separates exact-slot ownership from manual receipts and verified links. Browser-local fixtures let two reviewers discuss replay and ownership without touching Airtable or Buffer. Test in a new browser profile to start empty.

### What a contributor can establish

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport. Local changes survive in that browser alone. They cannot establish that an external queue received or published a post.

### Evidence and outstanding work

The private console remains private. This empty demo contains no account connection, post queue or operating logs. The next acceptance case is concrete. Using fictional entries, reserve a slot, attempt a duplicate and record a manual receipt.

### Place in POTIFY

Validate interest in an editorial setup session; recognize revenue when the session is delivered and paid. The marketing plan gives the test window and the evidence for a commercial outcome.

[Source provenance](source.json) · [Build log](BUILD-LOG.md) · [Marketing plan](MARKETING.md)
