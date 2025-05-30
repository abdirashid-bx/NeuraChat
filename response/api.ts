const apiKey = "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";

 

export const Response = async (userInput: string) => {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "openai/gpt-3.5-turbo",  
        "messages": [
          {
            "role": "user",
            "content": userInput
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("API Error:", data);
      throw new Error(`Fetch failed: ${response.status}`);
    }

    if (!data.choices || !data.choices.length || !data.choices[0].message) {
      throw new Error("No valid message returned from the API.");
    }

    const reply = data.choices[0].message.content;
  
    return reply;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
