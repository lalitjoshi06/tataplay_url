export default async function handler(req, res) {
    console.log('inside handler');
    const body = JSON.parse(req.body);
    const { longUrl } = body;

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
        },
        body: new URLSearchParams({
            "u": longUrl
        }),
        redirect: 'follow'
    };

    try {
        const fetchResponse = await fetch("https://www.shorturl.at/shortener.php", requestOptions);
        if (!fetchResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await fetchResponse.text();
        res.status(200).json({ data });
    } catch (error) {
        console.error('Error fetching or parsing response:', error);
        res.status(500).json({ error: error.message });
    }
}
