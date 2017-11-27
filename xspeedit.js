// module XspeedIt optimisé
module.exports = {
  sItemsIn: '',
  allArticles: [],
  onePackage: [],
  allBoxes: [],

  // init object
  clear: function () {
    this.sItemsIn = ''
    this.allArticles = []
    this.onePackage = []
    this.allBoxes = []
  },
  // init object
  init: function (sInput) {
    this.clear()
    this.setString(sInput)
    this.allArticles = this.convertSringIntoArrayOfInt(this.sItemsIn)
    this.putInBoxes(this.allArticles, this.onePackage, this.allBoxes)
  },
  // show output result
  showOutput: function () {
    return this.outputArray(this.allBoxes)
  },
  // get original string
  getString: function () {
    return this.sItemsIn
  },
  // set original string
  setString: function (sInput) {
    this.sItemsIn = sInput
  },
  // convert string into array of integer
  convertSringIntoArrayOfInt: function (sInput) {
    return sInput.split('').map(Number).filter(Boolean)
  },
  // Biggest Number In Array Smaller Or Equal Than x
  bniasoetx: function (arrayItems, x) {
    let res = Math.max.apply(Math, arrayItems.filter(function (y) {
      return y <= x
    }))
    return Number.isInteger(res) ? {index: arrayItems.indexOf(res), results: res} : false
  },
  sumInArray: function (arrayItems) {
    let sumInArray = arrayItems.reduce(function (pv, cv) { return pv + cv }, 0)
    return sumInArray
  },
  // Put articles in boxes
  putInBoxes: function (articles, aPackage, boxes) {
    let sumPackage = this.sumInArray(aPackage)
    let maxToFind = 10 - sumPackage
    let res = this.bniasoetx(articles, maxToFind)

    if (sumPackage + res.results === 10) { // best match to full up the box
      aPackage.push(res.results)
      articles.splice(res.index, 1)
      boxes.push(aPackage)
      aPackage = []
      if (articles.length === 0) { // no more articles
        return boxes
      } else { // Articles are still left
        return this.putInBoxes(articles, aPackage, boxes)
      }
    } else if (sumPackage + res.results < 10) { // not enough article yet to full up the box
      aPackage.push(res.results)
      articles.splice(res.index, 1)
      return this.putInBoxes(articles, aPackage, boxes)
    } else { // size of chosen articles bigger than a box
      boxes.push(aPackage); aPackage = []
      if (articles.length === 0) { // no more articles
        return boxes
      } else { // Articles are still left
        return this.putInBoxes(articles, aPackage, boxes)
      }
    }
  },
  // output as expected : xx/xxx/x/x
  outputArray: function (arrayItems) {
    let ret = ''
    for (var x in arrayItems) {
      for (var y in arrayItems[x]) {
        ret += arrayItems[x][y]
      }
      if (parseInt(x) !== arrayItems.length - 1) {
        ret += '/'
      }
    }
    return ret
  }
}
