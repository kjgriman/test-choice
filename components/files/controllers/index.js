const { servicesGetFiles } = require("../services");

exports.getFilesController = async (req, res, next) => {
  try {
    // get services 
    let dataResult = await servicesGetFiles();
     res.json({ payload: dataResult, status: 'SUCCESS' }) 
     res.status(200)
  } catch (error) {
    console.log('error',error);
    
    return res.json({ payload: error, status: 'ERROR' })
  }
}
