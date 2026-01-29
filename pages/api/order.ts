import { HOST } from '@/shared/config/constants';
import { NextApiRequest, NextApiResponse } from 'next';
import { readToken } from '../../src/shared/utils/secureStorage';

type QueryParams = Record<string, string | string[]>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const requestBody = req.body;
  const queryParams: QueryParams = req.query as QueryParams;

  const headers = Object.fromEntries(
    Object.entries(req.headers).map(([key, value]) => [key, String(value)])
  );

  try {

    const payload = await readToken();
    let token = null;
    if (payload)
       token = payload.access_token;

    console.log(req.body);
    
    const response = await fetch(
      `${HOST}/v2/orders${Object.keys(queryParams).length ? `?${new URLSearchParams(queryParams as Record<string, string>)}` : ''}`,
      {
        method: method,
        body: JSON.stringify(requestBody),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );



    if (!response.ok) {
      const data = await response.json();
      console.log("Ордер не получилось создать")
      throw new Error(data.message)
    }
    console.log("Ордер создан успешно!")
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      const text = await response.text();
      res.status(200).send(text);
    }
    
  } catch (error) {
    console.log("Ордер не получилось создать.")
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


