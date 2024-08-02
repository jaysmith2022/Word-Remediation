const axios = require("axios");
require('dotenv').config();

async function analyzeAccessibility(content) {
    const apiKey = process.env.OPENAI_API_KEY;
    const prompt = `Check the following content for accessibility issues following the WCAG 2.1 guidelines and provide suggestions:\n\nText:\n${content.text}`;

    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: prompt,
        max_tokens: 1500
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });
    return response.data.choices[0].text;
}

module.exports = { analyzeAccessibility };