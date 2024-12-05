export default async function handler(req, res) {
    const targetUrl = `https://gold888rtp.pics${req.url}`;
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        host: "gold888rtp.pics",
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : null,
    });
  
    const responseBody = await response.text();
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    res.status(response.status).send(responseBody);
  }
  