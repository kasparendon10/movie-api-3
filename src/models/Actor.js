const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Actor = sequelize.define('Actor', {
    firstName: { 
        type: DataTypes.STRING,
        allowNull: false 
    },
    lastName: { 
        type: DataTypes.STRING,
        allowNull: false 
    },
    nationality: { 
        type: DataTypes.STRING 
    },
    image: { 
        type: DataTypes.STRING 
    },
    birthday: { 
        type: DataTypes.DATE 
    }
});

module.exports = Actor;
