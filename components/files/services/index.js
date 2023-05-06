const config = require('config')
const {
    get
} = require('../../../utils/fetchWraper')
const URL = config.get('BASE_URL_EXTERNAL_API')

/**
 * Services Files
 * @public
 *
 * @returns {String} Services Files message
 */
const servicesGetFiles = async () => {
    try {
        let dataResult = await get(URL + '/secret/files')
        //  console.log('xxxxxxxxxxxx3', dataResult)
        return dataResult
    } catch (err) {
        console.log('error4 line 16', err)
        return null
    }
}

const servicesGetFileByName = async (name) => {
    try {
        let dataResult = await get(URL + '/secret/file/' + name)
        // console.log('xxxxxxxxxxxx1', dataResult)
        // if (dataResult) {
        return dataResult
        // }
    } catch (error) {
        throw Error('Error while Get files details by name')
        // console.log('xxxxxxxxxxxx2', error)
    }
}

const servicesParseFilesString = async (fileString) => {
    try {
        let text = JSON.stringify(fileString)
        let arraytext = text.split(/\\n/)
        // console.log('xxxxxx',arraytext);
        return arraytext
    } catch (err) {
        console.log('Error2 validate: line 46 ', err)
    }
}
const validateIsHex = (string) => {
    // var regex = /[0-9A-Fa-f]{6}/g
    var regex = /[0-9A-Fa-f]/g
    return string.match(regex)?.length == string.length
}
const validateIsNumber = (string) => {
    var regex = /[0-9]/g
    return string.match(regex)?.length == string.length
}
const validateIsText = (string) => {
    var regex = /[A-Za-z]/g
    return string.match(regex)?.length == string.length
}

const validateRules = async (array) => {
    let rulesPass = []
    validateIsText(array[1]) && rulesPass.push(validateIsText(array[1]))
    validateIsNumber(array[2]) && rulesPass.push(validateIsNumber(array[2]))
    validateIsHex(array[3]) && rulesPass.push(validateIsHex(array[3]))
    // console.log('pppppppp1',rulesPass);
    return rulesPass
}

const servicesValidateFilesString = async (fileStringArray) => {
    let arrayLines = []
    let objLines = {}
    try {
        if (
            fileStringArray &&
            Array.isArray(fileStringArray) &&
            fileStringArray.length > 0
        ) {
            for (let index = 1; index < fileStringArray.length; index++) {
                const element = fileStringArray[index]
                let splitElement = element.split(',')
                if (splitElement && splitElement.length == 4) {
                    let isRuleValidated = await validateRules(splitElement)
                    if (isRuleValidated && isRuleValidated.length == 3) {
                        // console.log('kerbin',isRuleValidated)
                        objLines = {
                            text: splitElement[1],
                            number: splitElement[2],
                            hex: splitElement[3],
                        }
                        arrayLines.push(objLines)
                    }
                }
            }
            return arrayLines
        }
        // return 'dataResult'
    } catch (err) {
        console.log('Error2 validate: line 101', err)
        return null
    }
}

const servicesGetFilesData = async () => {
    try {
        let filesResult = await servicesGetFiles()
        let arrayResult = []

        if (
            filesResult &&
            filesResult.files &&
            Array.isArray(filesResult.files) &&
            filesResult.files.length > 0
        ) {
            const {
                files
            } = filesResult

            for (let index = 0; index < files.length; index++) {
                const name = files[index];
                let objResult = {}
                if (typeof name == 'string' && name.length > 0) {
                    
                    // Get files by name
                    
                    let file =  await servicesGetFileByName(name)
                    
                    if (file) {
                        if (file && typeof file !== 'undefined') {
                            let parseFileName = await servicesParseFilesString(file)
                            if (parseFileName && Array.isArray(parseFileName)) {
                                objResult.file = name
                                let validateArray =
                                    await servicesValidateFilesString(
                                        parseFileName
                                    )
                                if (validateArray && validateArray.length > 0) {
                                    objResult.lines = validateArray
                                }
                            }
                        }
                    }

                    arrayResult.push(objResult)
                }
            }
        }
        return arrayResult
    } catch (err) {
        console.log('error1 file data line162', err)
    }
}

// export module services 
module.exports = {
    servicesGetFiles,
    servicesGetFileByName,
    servicesGetFilesData,
}

// [
//     {
//         file: 'file1.csv',
//         lines: [
//             {
//                 text: 'RgTya',
//                 number: 64075909,
//                 hex: '70ad29aacf0b690b0467fe2b2767f765',
//             },
//         ],
//     },
//     {
//         file: 'file2.csv',
//         lines: [
//             {
//                 text: 'RgTya',
//                 number: 64075909,
//                 hex: '70ad29aacf0b690b0467fe2b2767f765',
//             },
//             {
//                 text: 'SFDfgfgds',
//                 number: 4564545,
//                 hex: 'sdf87sd6f876dsf78er87sf7s98fe8979sd',
//             },
//         ],
//     },
// ]