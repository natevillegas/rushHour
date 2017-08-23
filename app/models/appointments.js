module.exports = function(sequelize, Sequelize) {
 
    var Appointments = sequelize.define('Appointment', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        day: {
            type: Sequelize.DATEONLY,
            notEmpty: true
        },
 
        time: {
            type: Sequelize.TIME,
            notEmpty: true
        },
 
        booked: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
 
 
    });
    
    // Appointments.associate = function(models) {
    //     Appointments.belongsTo(models.User, {
    //         foreignKey: {
    //         allowNull: false
    //         }
    //     });
    // };

    return Appointments;
 
}