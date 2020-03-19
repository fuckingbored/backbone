/**
 * Validation of user login
 * username || email - required
 * password - required
 */
function validateRegistrationConfirmation(req, res) {
    let queries = ["username", "password", "confirmationtoken"];

    let missing = queries.filter((q) => {
        if (!req.params[q])
            return q;
    });

    if (missing.length)
        return new Error(`Error: Missing required parameters: ${missing}`);

}

export default validateRegistrationConfirmation;