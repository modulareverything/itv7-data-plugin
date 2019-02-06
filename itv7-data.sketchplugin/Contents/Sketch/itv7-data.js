var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/itv7-data.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/entrants.json":
/*!******************************!*\
  !*** ./assets/entrants.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, default */
/***/ (function(module) {

module.exports = ["Reynolds Acker","Noshaba Ahmed","Michael Allison","Jasmine Amin","Matthew Anderson","John Armstrong","Shakeel Ashraf","Barrie Aspinall","Ellen Bailey","Jonathan Baines","Robin Bannister","Michele Barrett","Judith Barton","Glenys Bellamy","Chris Bennett","Bruno Bernard","John Blaylock","Robert Bloodworth","Jason Boulton","Albert Bradley","Alan Branagan","Simon Briggs","Charlotte Bright","Chris Brittain","Sylvia Brook","Lisa Brooks","Ewen Brown","Lesley Brown","Paul Browne","Matthew Burden","Edward Burgess","Gareth Burrows","Theresa Cannell","Sarah Carrick","Malcom Carter","James Clark","Susan Clarke","Susan Coates","Pauline Connolly","Trudy Connolly","Ines Connors","Paris Cook","Julie Cost","Phillip Cunningham","Gina Curry","Michael Cusack","Stacey Cusack","Michael Cutting","Shaun Dale","Karen Daly","Melanie Daniels","Helen Davison","Elizabeth Dodwell","Anne Draper","Ian Dunning","Joseph Eakin","Tony Earney","Claire Ennis","Mark Enoch","Thomas Evans","Gillian Farthing","Robert Finlay","Jeanne Flynn","Stephen Forbes","Susan Gallacher","Graham Gardner","Jane Gates","John Gauvin","Mario Gencarelli","Wendy Gibbins","Paul Gilbert","Jane Good","Derek Goodall","Victoria Gravett","Ayla Green","Linda Green","Robin Greenlees","Sian Griffith","Margaret Gull","Ashley Harper","Sandra Harris","Teresa Harris","Tracey Harvey","Josephine Hayes","Sophie Heap","Lesley Henson","Mark Hepworth","Maria Hewitt","Sherrie Hogg","Peter Holgate","Christine Holmes","Susan Hopson","Arthur Hughes","Louise Hunt","Peter Hurley","Anna Hurn","Robert Ing","Andrew Ingham","Brian Irving","William Izatt","Yvonne James","Karen Jefferson","Timothy Johnsen","Baki Kara","Anthony Keaney","Maureen Kelly","Karen Kerr","David King","John Leach","Christopher Lee","Constance Lock","Pauline Lowe","Melissa Lubbock","Rhys Maddock","Tabby Manning","Helene Martin","Michael McAndrew","John McCormack","James McDermott","Michael McGhee","Thomas McGuire","George McKeag","Salim Miah","Andreas Michael","Kim Millen","Robin Moore","Alison Morgan","Chris Morgan","Elizabeth Murray","Fatma Mustafa","Brenda Neaves","Martin Needham","Craig Nel","Donavon Nelson","Andrew Newman","Jane Newman","Pauline Norwood","Maureen Okoye","Susan Oldham","Jacqueline Oliver","Mohamed Patel","Barry Peat","Robert Peel","Ian Perry","Matthew Peters","Barbra Player","Caroline Poole","Raymond Powell","Hayley Preston","Patricia Preston","Lisa Quirke","Kirsten Rawson","Ian Reade","Jane Reed","Norma Regan","Richard Reid","Kathleen Richardson","Martin Rider","John Ritchie","Harold Rubinstein","Vivienne Russell","Cameron Santiago","Steven Sargent","Barry Searle","Richard Searle","Pauline Seddon","Marie Sexton","Colin Sidley","Rui Silva","Sally Singh","Brian Smith","David Smith","Katherine Soul","Wyndham Spice","William Stirling","Ida Sturgeon","Roger Swain","William Swires","Richard Thomas","Marie Tribe","William Tull","William Turner","Shaun Turner","Richard Tyrie","Christopher Urwin","Colin Veitch","Barry Waddington","William Wainwright","David Wallace","Sandra Walsh","Patrick Wells","Cliff Whiteside","Malcolm Williams","Michael Wilson","Barry Windham","Christine Wood","Stuart Young","Karen Young","Qamar Zaman","Jun Zhang","Catherine Adamson","Caroline Aguilar","Adnan Akram","Ian Aldridge","Mohamed Ali","Susan Archer","Mark Armstrong","Manju Arora","Natalie Aston","Carole Atkinson","Matthew Bailey","Patrick Ballard","Michael Barron","Anthony Bartle","George Baxter","Ian Beale","Jane Beaven","Michael Bethell","Marian Binks","Marc Bishop","Donald Blackett","Elisabeth Bond","David Bridge","Angela Brown","Derek Brown","David Buck","Patricia Bussey","Clare Butler","Lorraine Carroll","John Carter","Steven Chambers","Donna Chance","Faisal Chaudhuri","John Clarkson","Gary Clee","Jennifer Clements","Garrath Coley","Samantha Collins","Andrea Cope","Sharon Cornell","Patricia Craven","James Crombie","Shannon Currie","Kate Dantes","Paul Davies","Trevor Davies","Dawn Davis","Guy Davis","Robert Dawson","Andrew Dickens","Christine Dobson","David Driver","Samantha Drysdale","David Duncan","Stephen Duncan","Richard Eaton","Scott Edwards","Eugene Else","Mark Esau","Paul Evans","Pete Farrugia","Methven Forbes","Adrian Gale","Karl Garvey","Lisa Gatley","Tony Gerrard","Colin Gilder","Siu Goh","Mark Gorman","Michael Griffiths","Charlotte Hallmark","Robert Hancock","Aileen Hanson","Chris Hanson","Avril Harding","David Harris","Geoffrey Harris","Richard Harris","Sarah Harris","Wendy Hay","Gerald Helme","Michael Hemmings","Rebecca Hewitt","Leonie Heywood","Ian Hildreth","Adrian Hill","Sybil Hill","Martin Hirst","Jason Hitchcock","Lindsey Holmes","Brian Hughes","Anne Isaac","Dominik Jarosz","Jonathan Jennings","Kiran Joshi","Kam Kashani","Andrew Kay","Adrian Keane","Judith Kelly","Christine Kerr","Tahera Khalid","Janice King","Jonathan Kings","Thomas Kingsbury","Vincent Knust","Mariusz Krawczyk","Kimberley Leonard","Ding Lin","Simon Lindsey","Paul Lonsdale","David Lovell","Julie Lynas","Keith MacRae","Alex MacRae","Helen McDonald","Richard McEvoy","Peter McGee","Maureen McNab","Graham Miles","Julian Miles","Aidan Millar","Lorna Millington","Asif Mirza","Badereidin Mohammed","Robert Monk","Nigel Moore","Zaytun Moosa","Lorraine Morgan","William Morgan","Caroline Moss","Richard Mounsey","Susan Munns","Richard Murphy","Karine Nash","Noreen Neenan","Oliver Neil","Brooke Nye","Gary Owens","Andrew Parker","Alan Patmore","Ashrat Paulson","Julie Perry","Clinton Pickens","Barrie Picton","Chris Piper","Paul Plummer","Richard Potts","Kevin Price","Joan Rackham","Andrew Radford","Robert Radford","Christopher Raine","Dorothy Rees","Naomi Reynolds","Marcus Riley","Cynthia Rivers","Kris Roberts","Louise Roberts","Mark Roberts","Thomas Rogan","Patrick Ryder","Peter Salmon","Clare Saunders","Wolf Schneider","Fiona Sharp","Martin Sheldon","Colin Sidwell","Jean Simmonds","Paul Simpson","Susan Smalley","Roger Smith","Leigh Stephen","Alexander Stillman","Sarah Stott","Nigel Stringer","Janice Swift","Roger Tabor","Jeremy Taylor","Sally Taylor","Alan Tew","Duncan Victoria","Jane Viner","Linh Vu","David Walker","Scott Walker","William Washington","Greg Webber","Michael Weston","Stephen Whitaker","Michael Wilkins","Cynthia Williams","David Williams","Elizabeth Williams","Roderick Williams","Elizabeth Wilson","Michael Wilson","Roger Wisbey","Steven Wright"];

/***/ }),

/***/ "./src/itv7-data.js":
/*!**************************!*\
  !*** ./src/itv7-data.js ***!
  \**************************/
/*! exports provided: onStartUp, onShutDown, onSupplyEntrants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartUp", function() { return onStartUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutDown", function() { return onShutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyEntrants", function() { return onSupplyEntrants; });
var sketch = __webpack_require__(/*! sketch */ "sketch");

var DataSupplier = sketch.DataSupplier,
    UI = sketch.UI;

var util = __webpack_require__(/*! util */ "util"); // const json = require('json-loader');


function onStartUp() {
  DataSupplier.registerDataSupplier('public.text', 'Entrants', 'SupplyEntrants');
}
function onShutDown() {
  DataSupplier.deregisterDataSupplier();
} // Entrants

function onSupplyEntrants(context) {
  var key = context.data.key;
  var count = context.data.requestedCount;
  var items = context.data.items;

  var data = __webpack_require__(/*! ../assets/entrants.json */ "./assets/entrants.json");

  shuffle(data);
  data.forEach(function (item, i) {
    DataSupplier.supplyDataAtIndex(key, data[i], i);
  });
} // Shuffle Function

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onStartUp'] = __skpm_run.bind(this, 'onStartUp');
that['onShutDown'] = __skpm_run.bind(this, 'onShutDown');
that['onSupplyEntrants'] = __skpm_run.bind(this, 'onSupplyEntrants');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=itv7-data.js.map