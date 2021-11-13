module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("user", {
      name: {
        type: Sequelize.STRING,
      }, 
      title: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.STRING,
      },     
      ptoho: {
        type: Sequelize.STRING,
      },
    });
  
    return Tutorial;
  };