let accessToken;
const redirectID = 'http://localhost:3000/';
const clientID = 'b5e1d8396281443d8a60632314dbe0b9';

const Spotify = {
    getAccesToken() {
        if (accessToken) {
            return accessToken;
        } 
        
        // check for an access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/;
        )

        if (accesTokenMatch && expiresInMatch) {
            accessToken = accesTokenMatch;
            let expiresIn = expiresInMatch;
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        }

        window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectID}`

    }
};

export default Spotify;