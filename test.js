var test = require("tape");
var remark = require("remark");

var emoji = require("./");

test("remark-twemoji", function(t) {
  t.plan(3);

  const doc = "😂";

  // Basic usage without any specified options
  remark()
    .use(emoji)
    .process(doc, function(err, file) {
      t.equal(
        String(file),
        '<img class="emoji" draggable="false" alt="😂" src="https://twemoji.maxcdn.com/2/72x72/1f602.png" title="😂"/>\n'
      );
    });

  // With react we want get 'className' instead of 'class'
  remark()
    .use(emoji, { isReact: true })
    .process(doc, function(err, file) {
      t.equal(
        String(file),
        '<img className="emoji" draggable="false" alt="😂" src="https://twemoji.maxcdn.com/2/72x72/1f602.png" title="😂"/>\n'
      );
    });

  // With twemoji options, eg: 'size'
  remark()
    .use(emoji, { size: 128 })
    .process(doc, function(err, file) {
      t.equal(
        String(file),
        '<img class="emoji" draggable="false" alt="😂" src="https://twemoji.maxcdn.com/2/128x128/1f602.png" title="😂"/>\n'
      );
    });
});
