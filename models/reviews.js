'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
        args: true,
        msg: 'Title debe tener solo letras'
      },
        notNull: {
          args: true,
          msg: 'Title debe estar presente'
        }
      }
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
        args: true,
        msg: 'Text debe tener solo letras'
      },
        notNull: {
          args: true,
          msg: 'Text debe estar presente'
        }
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isInt: {
        args: true,
        msg: 'Rating debe ser de tipo numérico'
      },
        notNull: {
          args: true,
          msg: 'Rating debe estar presente'
        }
      }
    },
    bootcamp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'Bootcamp_id debe ser tipo numerico'
        },
        notNull: {
          args: true,
          msg: 'Bootcamp_id debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'Bootcamp_id debe existir'
        }
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'User_id debe ser tipo numerico'
        },
        notNull: {
          args: true,
          msg: 'User_id debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'User_id debe existir'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Reviews',
    timestamps: false
  });
  return Reviews;
};