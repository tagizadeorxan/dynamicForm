const apiResponse = require("../helpers/apiResponse");
const fs = require('fs');



exports.data = [
    (req, res) => {
        fs.readFile('../backend/assets/data.json', (err, data) => {
            if (err) apiResponse.ErrorResponse(res, err);
            data = JSON.parse(data)
            apiResponse.successResponseWithData(res, "success", data)
        })

    }
]