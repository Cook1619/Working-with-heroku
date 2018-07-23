// This object should mimic the structure of the object in env/development, but should use env properties
// Remember to set these env properties in the environment in which you deploy (AWS, Heroku, etc.)
// Also set the NODE_ENV environment property to "production" (no quotes) in AWS, Heroku, etc.
let cfg = {
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    STRIPE_SK: process.env.STRIPE_SK,
    db: {
        connectionLimit: 10,
        export DB_HOST='us-cdbr-iron-east-04.cleardb.net',
        export DB_NAME='heroku_1b28e370fdccedc',
        export DB_USER='b21ef39c5fdd16:16ae7958',
        export DB_PASS='16ae7958'
    },
};

export default { cfg };

