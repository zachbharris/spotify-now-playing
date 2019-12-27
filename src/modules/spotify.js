import spotifyWebApiNode from 'spotify-web-api-node'

export default new spotifyWebApiNode({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})
