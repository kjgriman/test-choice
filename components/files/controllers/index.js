const { servicesGetFiles, servicesGetFilesByName, servicesGetFilesData } = require('../services')

exports.getFilesController = async (req, res, next) => {
    try {
        // get services
        let dataResult = await servicesGetFiles()
        res.json({ payload: dataResult, status: 'SUCCESS' })
        res.status(200)
    } catch (error) {
        console.log('error', error)

        return res.json({ payload: error, status: 'ERROR' })
    }
}

exports.getFileByNameController = async (req, res, next) => {
    try {
        let nameFile = req.params && req.params.name ? req.params.name : null
        // get services
        if (nameFile == null) {
            return res
                .json({ payload: null, status: 'ERROR', message: 'Not Found' })
                .status(400)
        }
        let dataResult = await servicesGetFilesByName(nameFile)
        res.json({ payload: dataResult, status: 'SUCCESS' })
        res.status(200)
    } catch (error) {
        console.log('error', error)

        return res.json({ payload: error, status: 'ERROR' })
    }
}

exports.getFilesDataController = async (req, res) => {
    try {
        
        let dataResult = await servicesGetFilesData()
        res.json({ payload: dataResult, status: 'SUCCESS' })
        res.status(200)
    } catch (error) {
        console.log('error', error)

        return res.json({ payload: error, status: 'ERROR' })
    }
}
