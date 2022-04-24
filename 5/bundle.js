/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/add-new-point-mock.js":
/*!****************************************!*\
  !*** ./src/mock/add-new-point-mock.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewPointMock": () => (/* binding */ addNewPointMock)
/* harmony export */ });
/* harmony import */ var _travel_point_mocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-point-mocks.js */ "./src/mock/travel-point-mocks.js");
/* harmony import */ var _toolUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolUnit */ "./src/toolUnit.js");


const addNewPointMock = () => ({
  travelType: ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'],
  pointTime: 'sometime',
  cost: (0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(100),
  destination: ['London', 'Moscow', 'Toronto', 'Tokyo'],
  offers: {
    offer1: {
      id: 'offer1',
      cost: 'cost1',
      isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
      fullName: 'Add luggage'
    },
    offer2: {
      id: 'offer2',
      cost: 'cost2',
      isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
      fullName: 'Switch to comfort'
    },
    offer3: {
      id: 'offer3',
      cost: 'cost3',
      isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
      fullName: 'Add meal'
    },
    offer4: {
      id: 'offer4',
      cost: 'cost4',
      isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
      fullName: 'Choose seats'
    },
    offer5: {
      id: 'offer5',
      cost: 'cost5',
      isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
      fullName: 'Travel by train'
    }
  },
  description: (0,_travel_point_mocks_js__WEBPACK_IMPORTED_MODULE_0__.getDescription)(),
  img: () => `https://picsum.photos/248/152?r=${(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(1000).toString()}`
});

/***/ }),

/***/ "./src/mock/travel-point-mocks.js":
/*!****************************************!*\
  !*** ./src/mock/travel-point-mocks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDestination": () => (/* binding */ getDestination),
/* harmony export */   "getDescription": () => (/* binding */ getDescription),
/* harmony export */   "travelPointMocks": () => (/* binding */ travelPointMocks)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toolUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolUnit */ "./src/toolUnit.js");


const getDestination = () => {
  const cities = ['London', 'Moscow', 'Toronto', 'Tokyo'];
  return cities[(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(cities.length)];
};

const getPointType = () => {
  const types = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
  return types[(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(types.length)];
};

const getOffer = () => ({
  offer1: {
    id: 'offer1',
    cost: 'cost1',
    isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
    fullName: 'Add luggage'
  },
  offer2: {
    id: 'offer2',
    cost: 'cost2',
    isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
    fullName: 'Switch to comfort'
  },
  offer3: {
    id: 'offer3',
    cost: 'cost3',
    isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
    fullName: 'Add meal'
  },
  offer4: {
    id: 'offer4',
    cost: 'cost4',
    isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
    fullName: 'Choose seats'
  },
  offer5: {
    id: 'offer5',
    cost: 'cost5',
    isChecked: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2)),
    fullName: 'Travel by train'
  }
});

const getDescription = () => {
  const types = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
  return types.filter(x => (0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2) ? x : null).reduce((obj, cur) => `${obj + cur}\n`, '');
};

const getDate = () => dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('D MMM');
/*
const getChange = () => [getRandomInt(2),getRandomInt(24),getRandomInt(60)];

const getDuration = () => {
  const gapArr = getChange();
  const alfa = dayjs();
  const beta = alfa.clone();
  const delta =  alfa.subtract(beta);
  return delta.format('hh mm ss');
};
*/


const travelPointMocks = () => ({
  travelPointTime: getDate(),
  timeGap: `${(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(12) + 1}-${(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(24) + 12}`,
  duration: `${(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(12)}`,
  destination: getDestination(),
  travelPointType: getPointType(),
  description: getDescription(),
  offers: getOffer(),
  price: (0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(200) + 5,
  img: () => `https://picsum.photos/248/152?r=${(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(1000).toString()}`,
  isFavorite: Boolean((0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(2))
});

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "creatElement": () => (/* binding */ creatElement)
/* harmony export */ });
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;

    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;

    case RenderPosition.BEFOREEND:
      container.append(element);
      break;

    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};
const creatElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

/***/ }),

/***/ "./src/toolUnit.js":
/*!*************************!*\
  !*** ./src/toolUnit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "offerList": () => (/* binding */ offerList)
/* harmony export */ });
const getRandomInt = max => Math.floor(Math.random() * max);
const offerList = (pointData, itemHTML) => {
  let listOfOffers = '';
  const offersNames = Object.keys(pointData.offers);

  for (let i = 0; i < offersNames.length; i++) {
    listOfOffers += itemHTML(pointData.offers[offersNames[i]], i + 1);
  }

  return listOfOffers;
};

/***/ }),

/***/ "./src/view/add-new-point.js":
/*!***********************************!*\
  !*** ./src/view/add-new-point.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddNewPoint)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _toolUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolUnit */ "./src/toolUnit.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const addNewPoint = pointData => `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight">
                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${pointData.travelPointType}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${pointData.destination} list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=${'sometime'}>
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value=${'sometime'}>
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${pointData.price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                        ${(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.offerList)(pointData, offer => `<div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="$${offer.id}" type="checkbox" name="event-offer-meal" ${offer.isChecked ? 'checked' : ''}>
                        <label class="event__offer-label" for="${offer.id}">
                          <span class="event__offer-title">${offer.fullName}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.cost}</span>
                        </label>
                      </div>`)}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${pointData.description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                        <img class="event__photo" src="${pointData.img()}" alt="Event photo">
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>`;

var _pointData = /*#__PURE__*/new WeakMap();

var _element = /*#__PURE__*/new WeakMap();

class AddNewPoint {
  constructor(pointData) {
    _classPrivateFieldInitSpec(this, _pointData, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _pointData, pointData);
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return addNewPoint(_classPrivateFieldGet(this, _pointData));
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/content-filters.js":
/*!*************************************!*\
  !*** ./src/view/content-filters.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentFilters": () => (/* binding */ contentFilters),
/* harmony export */   "default": () => (/* binding */ ContentFilters)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }


const contentFilters = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`;

var _element = /*#__PURE__*/new WeakMap();

class ContentFilters {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return contentFilters();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/content-list.js":
/*!**********************************!*\
  !*** ./src/view/content-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentList)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const contentList = () => `<ul class="trip-events__list">
          </ul>`;

var _element = /*#__PURE__*/new WeakMap();

class ContentList {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return contentList();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/edit-point.js":
/*!********************************!*\
  !*** ./src/view/edit-point.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPoint)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _toolUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolUnit */ "./src/toolUnit.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const editPoint = pointData => `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${pointData.travelPointType}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${pointData.destination}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${pointData.price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      ${(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.offerList)(pointData, (offer, index) => `<div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="${index}_${offer.id}" type="checkbox" name="${index}_${offer.id}" ${offer.isChecked ? 'checked' : ''}>
                        <label class="event__offer-label" for="${index}_${offer.id}">
                          <span class="event__offer-title">${offer.fullName}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.cost}</span>
                        </label>
                      </div>`)}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${pointData.description}</p>
                  </section>
                </section>
              </form>
            </li>`;

var _element = /*#__PURE__*/new WeakMap();

var _pointData = /*#__PURE__*/new WeakMap();

class EditPoint {
  constructor(pointData) {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointData, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _pointData, pointData);
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return editPoint(_classPrivateFieldGet(this, _pointData));
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/empty-list.js":
/*!********************************!*\
  !*** ./src/view/empty-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyList)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const drawEmptyList = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

var _element = /*#__PURE__*/new WeakMap();

class EmptyList {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return drawEmptyList();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/head-filters.js":
/*!**********************************!*\
  !*** ./src/view/head-filters.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeadFilters)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const headFilters = () => `<form class="trip-filters" action="#" method="get">
                <div class="trip-filters__filter">
                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                  <label class="trip-filters__filter-label" for="filter-future">Future</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
                  <label class="trip-filters__filter-label" for="filter-past">Past</label>
                </div>

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;

var _element = /*#__PURE__*/new WeakMap();

class HeadFilters {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return headFilters();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/head-info.js":
/*!*******************************!*\
  !*** ./src/view/head-info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeadInfo)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const headInfo = () => `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
            </p>
          </section>`;

var _element = /*#__PURE__*/new WeakMap();

class HeadInfo {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return headInfo();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/head-navigation.js":
/*!*************************************!*\
  !*** ./src/view/head-navigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeadNavigation)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const headNavigation = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
                <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
                <a class="trip-tabs__btn" href="#">Stats</a>
              </nav>`;

var _element = /*#__PURE__*/new WeakMap();

class HeadNavigation {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return headNavigation();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/travel-point.js":
/*!**********************************!*\
  !*** ./src/view/travel-point.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TravelPoint)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render */ "./src/render.js");
/* harmony import */ var _toolUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toolUnit */ "./src/toolUnit.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const travelPoint = pointData => `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">MAR 18</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src=${pointData.img()} alt="Event type icon">
                </div>
                <h3 class="event__title">${pointData.travelPointType} ${pointData.destination}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T12:25"></time>
                    &mdash;${pointData.timeGap}
                    <time class="event__end-time" datetime="2019-03-18T13:35"></time>
                  </p>
                  <p class="event__duration">${pointData.duration}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${pointData.price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${(0,_toolUnit__WEBPACK_IMPORTED_MODULE_1__.offerList)(pointData, offer => offer.isChecked ? `<li class="event__offer">
                    <span class="event__offer-title">${offer.fullName}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${offer.cost}</span>
                  </li>` : '')}
                </ul>
                <button class="event__favorite-btn event__favorite-btn--active" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;

var _pointData = /*#__PURE__*/new WeakMap();

var _element = /*#__PURE__*/new WeakMap();

class TravelPoint {
  constructor(pointData) {
    _classPrivateFieldInitSpec(this, _pointData, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _pointData, pointData);
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render__WEBPACK_IMPORTED_MODULE_0__.creatElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return travelPoint(_classPrivateFieldGet(this, _pointData));
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_content_filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/content-filters.js */ "./src/view/content-filters.js");
/* harmony import */ var _view_head_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/head-navigation.js */ "./src/view/head-navigation.js");
/* harmony import */ var _view_head_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/head-filters.js */ "./src/view/head-filters.js");
/* harmony import */ var _view_head_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/head-info.js */ "./src/view/head-info.js");
/* harmony import */ var _view_add_new_point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/add-new-point.js */ "./src/view/add-new-point.js");
/* harmony import */ var _view_travel_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/travel-point */ "./src/view/travel-point.js");
/* harmony import */ var _mock_travel_point_mocks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/travel-point-mocks.js */ "./src/mock/travel-point-mocks.js");
/* harmony import */ var _mock_add_new_point_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/add-new-point-mock */ "./src/mock/add-new-point-mock.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _view_content_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/content-list */ "./src/view/content-list.js");
/* harmony import */ var _view_edit_point__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/edit-point */ "./src/view/edit-point.js");
/* harmony import */ var _view_empty_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/empty-list */ "./src/view/empty-list.js");












const mainMenu = document.querySelector('.trip-main');
const mainMenuControls = mainMenu.querySelector('.trip-main__trip-controls');

const renderTravelPoint = (travelPoint, pointData) => {
  const travelPointComponent = new _view_travel_point__WEBPACK_IMPORTED_MODULE_5__["default"](pointData);
  const travelPointEditor = new _view_edit_point__WEBPACK_IMPORTED_MODULE_10__["default"](pointData);

  const replacePointToEdit = () => {
    travelPoint.replaceChild(travelPointEditor.element, travelPointComponent.element);
  };

  const replaceEditToPoint = () => {
    travelPoint.replaceChild(travelPointComponent.element, travelPointEditor.element);
  };

  const onEscKeyDown = evt => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  const onMouseClickDown = () => {
    replacePointToEdit();
  };

  const onMouseClickUp = () => {
    replaceEditToPoint();
  };

  travelPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    onMouseClickDown();
    document.addEventListener('keydown', onEscKeyDown);
  });
  travelPointEditor.element.querySelector('.event__rollup-btn').addEventListener('click', () => onMouseClickUp());
  travelPointEditor.element.querySelector('form').addEventListener('submit', evt => {
    onMouseClickUp();
    evt.preventDefault();
    replaceEditToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });
  (0,_render__WEBPACK_IMPORTED_MODULE_8__.render)(travelPoint, travelPointComponent.element, _render__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.BEFOREEND);
};

(0,_render__WEBPACK_IMPORTED_MODULE_8__.render)(mainMenu, new _view_head_info_js__WEBPACK_IMPORTED_MODULE_3__["default"]().element, _render__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.AFTERBEGIN);
(0,_render__WEBPACK_IMPORTED_MODULE_8__.render)(mainMenuControls, new _view_head_navigation_js__WEBPACK_IMPORTED_MODULE_1__["default"]().element, _render__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.AFTERBEGIN);
(0,_render__WEBPACK_IMPORTED_MODULE_8__.render)(mainMenuControls, new _view_head_filters_js__WEBPACK_IMPORTED_MODULE_2__["default"]().element, _render__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.AFTERBEGIN);
const content = document.querySelector('.trip-events');
(0,_render__WEBPACK_IMPORTED_MODULE_8__.render)(content, new _view_content_filters_js__WEBPACK_IMPORTED_MODULE_0__["default"]().element, _render__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.AFTERBEGIN);
(0,_render__WEBPACK_IMPORTED_MODULE_8__.render)(content, new _view_content_list__WEBPACK_IMPORTED_MODULE_9__["default"]().element, _render__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.BEFOREEND);
const contentList = content.querySelector('.trip-events__list');
(0,_render__WEBPACK_IMPORTED_MODULE_8__.render)(contentList, new _view_add_new_point_js__WEBPACK_IMPORTED_MODULE_4__["default"]((0,_mock_travel_point_mocks_js__WEBPACK_IMPORTED_MODULE_6__.travelPointMocks)()).element, _render__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.AFTERBEGIN); //render(contentList, new EditPoint(travelPointMocks()).element, RenderPosition.AFTERBEGIN);

const data = Array.from(Array(5), () => (0,_mock_travel_point_mocks_js__WEBPACK_IMPORTED_MODULE_6__.travelPointMocks)());

for (const keys of data) {
  renderTravelPoint(contentList, keys);
}

if (contentList.children.length === 0) {
  (0,_render__WEBPACK_IMPORTED_MODULE_8__.render)(content, new _view_empty_list__WEBPACK_IMPORTED_MODULE_11__["default"]().element, _render__WEBPACK_IMPORTED_MODULE_8__.RenderPosition.BEFOREEND);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map