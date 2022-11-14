const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey: true,
          },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    summary:{
      type: DataTypes.STRING
    },

    healthScore: {
      type: DataTypes.FLOAT
    },
    
    steps: {
      type: DataTypes.TEXT
    },

    createInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },

    image: {
      type: DataTypes.STRING, // Porque el endpoint de la API me lo envia por string
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/a/ae/FoodMeat.jpg"
    }

    
  });
};
