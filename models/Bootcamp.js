'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Name debe tener solo letras'
        },
        notNull: {
          args: true,
          msg: 'Name debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'Name no debe ser vacío'
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Description debe estar presente'
        }
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Website debe estar presente'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Phone debe estar presente'
        }
      }
    },
    average_rating: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Average_rating debe estar presente'
        }
      }
    },
    average_cost: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Average_cost debe estar presente'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Bootcamp',
  });
  return Bootcamp;
};