var mocha = require('mocha')
var chai = require('chai')
var expect = chai.expect
var xspeedit = require('./../xspeedit.js')
var describe = mocha.describe
var it = mocha.it

describe('Find the sum in a array', function () {
  it('Sum empty array [] : 0', function () {
    let articles = []
    expect(xspeedit.sumInArray(articles)).to.equal(0)
  })
  it('Sum 1 element [1] : 1', function () {
    let articles = [1]
    expect(xspeedit.sumInArray(articles)).to.equal(1)
  })
  it('Sum 2 elements [1, 1] : 2', function () {
    let articles = [1, 1]
    expect(xspeedit.sumInArray(articles)).to.equal(2)
  })
})

describe('Convert string into array of integer', function () {
  it('String 1234 : [1, 2, 3, 4]', function () {
    let sItemsIn = '1234'
    expect(xspeedit.convertSringIntoArrayOfInt(sItemsIn)).to.have.all.members([1, 2, 3, 4])
  })
})

describe('Biggest Number In Array Smaller Or Equal Than x', function () {
  it('Biggest Number In Array Smaller Or Equal Than x : articles = [8, 1, 2, 3] - maxToFind = 2 - res = index : 2, res: 2', function () {
    let articles = [8, 1, 2, 3]
    let maxToFind = 2
    let results = xspeedit.bniasoetx(articles, maxToFind)
    expect(results.index).to.equal(2)
    expect(results.results).to.equal(2)
  })
  it('Biggest Number In Array Smaller Or Equal Than x : articles = [8, 7] - maxToFind = 2 - res = false', function () {
    let articles = [8, 7]
    let maxToFind = 2
    let results = xspeedit.bniasoetx(articles, maxToFind)
    expect(results).to.equal(false)
  })
})

describe('Put articles in boxes ', function () {
  it('Put articles in boxes s:1 r:1', function () {
    xspeedit.init('1')
    expect(xspeedit.showOutput()).to.equal('1')
  })

  it('Put articles in boxes s:19 r:91', function () {
    xspeedit.init('19')
    expect(xspeedit.showOutput()).to.equal('91')
  })

  it('Put articles in boxes s:19 r:91', function () {
    xspeedit.init('19')
    expect(xspeedit.showOutput()).to.equal('91')
  })

  it('Put articles in boxes s:191111111111 r:9111111111111', function () {
    xspeedit.init('191111111111')
    expect(xspeedit.showOutput()).to.equal('91/1111111111')
  })

  it('Put articles in boxes s:98765 r:9/8/7/6/5', function () {
    xspeedit.init('98765')
    expect(xspeedit.showOutput()).to.equal('9/8/7/6/5')
  })

  it('Put articles in boxes s:163841689525773 r:91/82/81/73/73/64/6/55', function () {
    xspeedit.init('163841689525773')
    expect(xspeedit.showOutput()).to.equal('91/82/81/73/73/64/6/55')
  })
})
