'use strict';

// Simple In-Memory Database (minimal synchronous version)
// initialize
// create
// find
// findById


const simDB = {

  create: function (newItem) {
    newItem.id = this.nextVal++;
    this.data.unshift(newItem);
    return newItem;
  },

  find: function (query = {}) {
    return this.data.filter(item => Object.keys(query).every(key => item[key] === query[key]));
  },

  findById: function (id) {
    return this.data.find(item => item.id === Number(id));
  },

  initialize: function(data) {
    this.nextVal = 1000;
    this.data = data.map(item => {
      item.id = this.nextVal++;
      return item;
    });
    return this;
  }
  
};

module.exports = Object.create(simDB);
