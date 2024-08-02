const mammoth = require("mammoth");
const fs = require("fs");

function extractContent(filePath) {
    return mammoth.extractRawText({ path: filePath })
        .then(result => {
            const text = result.value;
            return { text };
        });
}

module.exports = { extractContent };