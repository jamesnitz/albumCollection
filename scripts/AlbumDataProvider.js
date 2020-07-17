const albumCollection = [
  {
    name: "The Low End Theory",
    artist: "Tribe Called Quest",
    genre: "Hip-Hop"
  },
  {
    name: "Nonagon Infinity",
    artist: "King Gizzard and The Lizard Wizard",
    genre: "Rock"
  },
  {
    name: "Sometimes I Sit and Think, and Sometimes I Just Sit",
    artist: "Courtney Barnett",
    genre: "Folk"
  },
 {
   name: "Hybrid Theory",
   artist: "Linkin Park",
   genre: "Rock"
 }
]


export const useAlbum = () => {
  return albumCollection.slice()
}

//this function returns all rock albums
export const rockAlbums = () => {
  let rockAlbumArray = []
  for (const album of albumCollection){
    if (album.genre === "Rock") {
      rockAlbumArray.push(album)
    }
  }
  return rockAlbumArray
}


//this is the filter method that returns all rock albums
export const rockAlbumsFiltered = albumCollection.filter(album => album.genre === "Rock")