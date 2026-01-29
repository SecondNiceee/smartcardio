import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  

  const { promocodeId } = req.query;

  if (!promocodeId || typeof promocodeId !== 'string') {
    return res.status(400).json({ error: "Missing or invalid promocodeId" });
  }

  const url = `${process.env.PARTNER_API}/api/sales/create?promocodeId=${promocodeId}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.X_API_KEY || ''
      },
    });
    const data = await response.json().catch(() => ({}));
    res.status(response.status).json(data);
  } catch (error: any) {
    console.log("Proxy Error:", error.message || error);
    res.status(500).json({ error: "Failed to proxy request" });
  }
}
