const db = require('../../dataBase').getInstance();
const {DB_TABLE_ENUM} = require('../../constant');

module.exports = async tokenObject => {
    const OAuthModel = db.getModel(DB_TABLE_ENUM.OAUTH_TOKEN);

    try {
        return await OAuthModel.create(tokenObject);
    } catch (e) {
        console.log(e);
    }
};
