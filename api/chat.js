export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing OPENAI_API_KEY" });
  }

  const question = (req.body?.question || "").toString().trim();
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const systemPrompt =
    "You are Sangram Das portfolio assistant. Answer only about Sangram and this portfolio. Keep replies concise and helpful. If asked outside portfolio context, politely redirect to portfolio-related topics. Facts: Sangram Das is a full-stack developer and B.Tech CSE student. Skills: React.js, Next.js, JavaScript, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Three.js, HTML, CSS, Java, JDBC, Servlets. Featured project: Doctor Appointment Booking System with live demo. Contact email: dassangram171@gmail.com. Resume available via Resume button.";

  try {
    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
      }),
    });

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      return res.status(500).json({ error: errorText });
    }

    const data = await openaiResponse.json();
    const answer = data.output_text || "I could not generate an answer right now.";
    return res.status(200).json({ answer });
  } catch (error) {
    return res.status(500).json({ error: "Chat request failed", details: String(error) });
  }
}
