const fs = require("fs");
const path = require("path");
const os = require("os");
const { extractContent } = require("./Mammoth");
const { analyzeAccessibility } = require("./Axios");


const homeDir = os.homedir();
const downloadsFolder = path.join(homeDir, 'Downloads');
const filePath = path.join(downloadsFolder, 'path_to_word_document.docx');

function generateReport(report) {
    fs.writeFile("accessibility_report.txt", report, (err) => {
        if (err) {
            console.error("Error writing report:", err);
        } else {
            console.log("Report saved successfully.");
        }
    });
}

extractContent(filePath).then(content => {
    analyzeAccessibility(content).then(report => {
        generateReport(report);
    });
});