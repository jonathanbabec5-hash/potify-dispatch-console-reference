import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const html=readFileSync('public/index.html','utf8');
test('check the published edition and its primary assets',()=>{
assert.match(html,/posts:\[\],log:\[\]/);
assert.ok(html.includes('do not replay'));
assert.ok(html.includes('awaiting approval'));
assert.doesNotMatch(html,/fetch\s*\(/);

});
