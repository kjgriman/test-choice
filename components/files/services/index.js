const config = require("config");
const { get } = require("../../../utils/fetchWraper");

/**
 * Services Files
 * @public
 *
 * @returns {String} Services Files message
 */
exports.servicesGetFiles = async () => {
  try {
    let url = config.get('BASE_URL_EXTERNAL_API')
    let dataResult = await get(url + '/secret/files')
    return dataResult;
  } catch (err) {
    console.log('error',err);
  }
};