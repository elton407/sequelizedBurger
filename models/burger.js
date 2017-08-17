'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burgerName: DataTypes.STRING,
    devoured: {
      type:DataTypes.BOOLEAN
    }
  });
  return burgers;
};

