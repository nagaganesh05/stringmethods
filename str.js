var a = 'ganesh';
console.log(a.length)

var b = '       hello     '.trim()
console.log(b)
console.log(b.trimStart())
console.log(b.trimEnd())

let c = '   hello'.trimLeft()
console.log(c)

let d = 'hi    '.trimRight()
console.log(d)

const e = 'javaScRIPT'
console.log(e.toLowerCase())

const f = 'scripting'
console.log(f.toUpperCase())

var g = 'naga ganesh'.startsWith('n')
console.log(g)

let h = 'ganesh'.endsWith('h')
console.log(h)

let a1 = 'naga ganesh'
console.log(a1.charAt(5))

var a2 = 'ganesh'
console.log(a2.indexOf('s'))

var a3 = 'javascript'
console.log(a3.lastIndexOf('p'))

const a4 = 'naga'
const a5 = 'ganesh'
console.log(a4+""+a5)

var i = 'ganesh'
console.log(i.includes('an'))
console.log(i.includes('bc'))

var b1 = 'naga ganesh'
console.log(b1.slice(2))
console.log(b1.slice(5))
console.log(b1.slice(0,4))
console.log(b1.slice(-1))
console.log(b1.slice(-6,))
console.log(b1.slice(-11,-6).slice(-4,-2))

let b2 = 'naga ganesh'
let b21 = b2.split("n")
let b22 = b21.join("")
let b23 = b22.split("a")
let b24 = b23.join("")
console.log(b24)


var c1 = "ga@ne=s*h"
var c2 = c1.split("@")
var c3 = c2.join(" ")
var c4 = c3.split("=")
var c5 = c4.join(" ")
var c6 = c5.split("*")
var c7 = c6.join("")
console.log(c7)


var d1 = "abc123"
console.log(d1.repeat(5))

var d2 = "saisathwik"
console.log(d2.replace('t','x'))


var spl= 'id=10*90&TS'
console.log(spl.split("=").join(" ").split("&").join(" ").split("*").join(" "))



var special = "Kur&a# N@ith$sh"
var special1 = special.split("&")
var special2 = special1.join(" ")
var special3 = special2.split("#")
var special4 = special3.join(" ")
var special5 = special4.split("@")
var special6 = special5.join(" ")
var special7 = special6.split("$")
var special8 = special7.join(" ")
console.log(special8)

var js = "ganesh"
var js1 = js.split("a")
var js2 = js1.join(" ")
var js3 = js2.split("e")
var js4 = js3.join(" ")
var js5 = js4.split("h")
var js6 = js5.join("")
console.log(js6)

var sai = "name:soma@naga$ganesh?/"
var sai1 = sai.split(":")
var sai2 = sai1.join("")
var sai3 = sai2.split("@")
var sai4 = sai3.join("")
var sai5 = sai4.split("$")
var sai6 = sai5.join("")
var sai7 = sai6.split("?")
var sai8 = sai7.join("")
var sai9 = sai8.split("/")
var sai10 = sai9.join("")
console.log(sai10)

let co = "co0d~er*}s"
let ci = co.split("0")
let cj = ci.join("")
let ck = cj.split("~")
let cv = ck.join("")
let cl = cv.split("*")
let coo = cl.join("")
let cov = coo.split("}")
let cff = cov.join("")
console.log(cff)

var z = "good"
var x = "morning"
console.log(z.concat("" + x))

var z1 = "soma"
var z2 = "naga"
var z3 = "ganesh"
console.log(z1.concat("" + z2,z3))


var x1 = "saisathwik"
console.log(x1.slice(0,))
console.log(x1.slice(-2,))
console.log(x1.slice(3,10))
console.log(x1.slice(7,10))
console.log(x1.slice(0,3))

var t1 = "ganesh"
console.log(t1.at(2))
console.log(t1.at(-2,-3))
console.log(t1.at(8,))
console.log(t1.at(-1))