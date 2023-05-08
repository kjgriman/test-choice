/**
 * Services Welcome
 * @public
 *
 * @returns {String} Services Welcome message
 */
exports.servicesWelcome = async () => {
    try {
        let message = {
            message:
                'Welcome to backend test toolbox, please add /api/v1 into the url',
        }
        return message
    } catch (err) {
        throw new Error(err)
    }
}
