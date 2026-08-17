export default async function handler(req, res) {
  // Allow Math Vision on GitHub Pages to communicate with this API
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle browser preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST requests are allowed."
    });
  }

  try {
    const { description } = req.body;

    if (!description || description.trim() === "") {
      return res.status(400).json({
        error: "Please provide a diagram description."
      });
    }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-image-1",
          prompt: description,
          size: "1024x1024"
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "OpenAI request failed."
      });
    }

    return res.status(200).json({
      image: data.data?.[0]?.b64_json
    });

  } catch (error) {
    return res.status(500).json({
      error: "Server error while generating the diagram."
    });
  }
}
