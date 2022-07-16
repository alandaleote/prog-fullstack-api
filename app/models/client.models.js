module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define('Client', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING(11),
            allowNull: false
        }
    })

    return Client;
}
