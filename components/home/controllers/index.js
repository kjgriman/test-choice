const { servicesHome } = require('../services')

exports.getHomeController = async (req, res) => {
    try {
        // get services
        let sayHi = await servicesHome()
        res.json({ payload: sayHi, status: 'SUCCESS' })
        res.status(200)
    } catch (error) {
        return res.json({ data: error, status: 'ERROR' }).status(500)
    }
}
