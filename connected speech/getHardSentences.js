const fs = require('fs')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(__dirname, '../890k sentences in english.txt'),
  { encoding: 'utf-8' }
)

const allSentences = txt.split('\r\n')

const unstressWords = `
about
after
again
also
always
because
before
behind
below
beside
between
both
but
by
can
could
did
do
does
done
during
each
for
from
get
had
has
have
how
into
just
know
like
look
make
many
more
most
much
must
my
never
no
not
now
of
off
on
only
or
other
our
out
over
own
put
rather
said
say
sees
should
since
so
some
still
such
take
than
that
the
their
them
then
there
these
they
this
those
through
to
`
  .split('\n')
  .filter(v => v.length > 0)

console.log(allSentences.length)

const catalogação = allSentences.map(s => {
  const allWords = s.match(/[a-zA-Z][’'a-zA-Z]*/gi)
  // let smallWord =
  //   ?.filter(w => w.length <= 3).length
  const w = allWords?.filter(w =>
    unstressWords.includes(w.toLowerCase())
  ).length
  return {
    score: s.length > 50 || !allWords ? 0 : allWords?.length,
    text: s,
  }
})

const sorted = catalogação
  .sort((a, b) => {
    return b.score - a.score
  })
  .map(v => v.text)
  .slice(0, 300)

console.log(sorted.join('\n'))
