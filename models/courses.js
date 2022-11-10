'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Description debe tener solo letras'
        },
        notNull: {
          args: true,
          msg: 'Description debe estar presente'
        }
      }
    },
    weeks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'Week debe ser tipo numerico'
        },
        notNull: {
          args: true,
          msg: 'Week debe estar presente'
        }
      }
    },
    enroll_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'Enroll_cost debe ser tipo numerico'
        },
        notNull: {
          args: true,
          msg: 'Enroll_cost debe estar presente'
        }
      }
    },
    minimum_skill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Minimum_skill debe ser tipo numerico'
        },
        notNull: {
          args: true,
          msg: 'Minimum_skill debe estar presente'
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
    }
  }, {
    sequelize,
    modelName: 'Course',
    timestamps: false,
  });
  return Course;
};