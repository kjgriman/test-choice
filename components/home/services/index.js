/**
 * Services Home
 * @public
 *
 * @returns {String} Services Home message
 */
exports.servicesHome = async () => {
    try {
        let message = {
            data: 'Welcome to API test choice',
        }
        return message
    } catch (err) {
        throw new Error(err)
    }
}
