class Scrabble {
  constructor(word) {
    this.word = word
    this.scores = {
      a: 1,
      b: 3,
      c: 3,
      d: 2,
      e: 1,
      f: 4,
      g: 2,
      h: 4,
      i: 1,
      j: 8,
      k: 5,
      l: 1,
      m: 3,
      n: 1,
      o: 1,
      p: 3,
      q: 10,
      r: 1,
      s: 1,
      t: 1,
      u: 1,
      v: 4,
      w: 4,
      x: 8,
      y: 4,
      z: 10
    }
  }

  score() {
    let score = 0
    if (typeof this.word !== 'string') {
      return 0
    }
    this.word
      .toLowerCase()
      .trim()
      .split('')
      .forEach((char) => (score += this.scores[char]))
    return score
  }
}
let scrabble = new Scrabble(null)
console.log(scrabble.score())

module.exports = Scrabble
