const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

async function main() {
    try {
        await sequelize.authenticate();
        console.log('DB connected');

        await sequelize.sync({ alter: true });
        console.log('Database & tables created!');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();


