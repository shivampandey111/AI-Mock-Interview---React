let question;
    export async function getQuestion(currentTrack){
        const prompt = `Generate one junior level ${currentTrack} question for software engineer role. Return only question, nothing else.`
        try {
            const API_KEY = 'AIzaSyBslww-oSItTFBrvV1owvJnTjP450A-W2o'
            const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    contents: [{ parts: [{
                                    text: prompt
                                }]
                            }]
                })
            });
        const data = await response.json() 
        question = data.candidates[0].content.parts[0].text

        }
        catch(error){
            question = 'error'
        }
        return question;
    }
    
let feedback;
    export async function getFeedback(ans, currentTrack){
        const prompt = `Question: ${question}
        Answer: ${ans}
        You are an experienced ${currentTrack} professional. Act like a mentor. And give to the point answer.
                    Evaluate this answer and return ONLY a JSON object with:
                    - good: array of what was good, 3 elements only
                    - missing: array of what was missing, 3 elements only
                    - ideal: string with the ideal answer summary`
        try {
            const API_Key = 'AIzaSyBslww-oSItTFBrvV1owvJnTjP450A-W2o'
            const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_Key}`
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                    contents: [{ parts: [{
                                    text: prompt
                                }]
                            }]
                })
        });

        const data = await response.json();
        const raw = data.candidates[0].content.parts[0].text
        const cleanText = raw.replace(/```json|```/gi, '').trim()
        feedback = JSON.parse(cleanText)
      
    }
    catch(error){
        feedback = 'Error generating the Feedback.'
    }
    return feedback;
}

  
    

