const { servicesWelcome } = require("../services");

exports.getWelcomeController = async (req, res, next) => {
  try {
    // get services 
    let sayWelcome = await servicesWelcome();
     res.json({ payload: sayWelcome, status: 'SUCCESS' }) 
     res.status(200)
  } catch (error) {
    console.log('error',error);
    
    return res.json({ payload: error, status: 'ERROR' })
  }
}
