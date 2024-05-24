export async function getAuthToken(): Promise<string> {
    // Fetch data from external API
    const res = await fetch('https://api4.thetvdb.com/v4/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            apikey: process.env.TVDB_API_KEY
        })
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return (<AuthData>await res.json()).data.token
}

type AuthData = {
    data: { token: string }
}