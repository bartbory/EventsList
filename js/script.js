// Create calendar Event box
const createCalendarBox = () => {
    const divEvent = document.createElement('div')
    divEvent.classList.add('event')
    return calendarBox.append(divEvent)
}

// Create Event box details
const createEvent = () => {
    const eventDate = document.createElement('p')
    eventDate.classList.add('event__date')
    const eventLoc = document.createElement('div')
    eventLoc.classList.add('event__loc')
    const eventPlace = document.createElement('p')
    eventPlace.classList.add('event__place')
    const btnBuy = document.createElement('button')
    btnBuy.classList.add('btn__buy')
    const createdEvent = document.querySelector('.event:last-child')
    createdEvent.append(eventDate, eventLoc, eventPlace, btnBuy)
    const createdEventLoc = document.querySelector('.event:last-child>.event__loc')
    const eventCity = document.createElement('h3')
    eventCity.classList.add('loc__city')
    const eventTour = document.createElement('h3')
    eventTour.classList.add('loc__tour')
    createdEventLoc.append(eventCity, eventTour)
}

// Fetch calendar
const calendarFetch = fetch('./assets/calendar.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const eventsNo = data.concert
        console.log(eventsNo.length)
        for (let i = 0; i < eventsNo.length; i++) {
            createCalendarBox()
            createEvent()
            let date = document.querySelector('#calendar>.wrap>.event:last-child>.event__date')
            date.textContent = eventsNo[i].date
            let city = document.querySelector('#calendar>.wrap>.event:last-child>.event__loc>.loc__city')
            city.textContent = eventsNo[i].city
            let tour = document.querySelector('#calendar>.wrap>.event:last-child>.event__loc>.loc__tour')
            tour.textContent = eventsNo[i].tour
            let place = document.querySelector('#calendar>.wrap>.event:last-child>.event__place')
            place.textContent = eventsNo[i].place
            let cta = document.querySelector('#calendar>.wrap>.event:last-child>.btn__buy')
            cta.textContent = `Buy tickets`
        }
    })
    .catch(err => console.error(err))

// Create album box
const createAlbumBox = () => {
    const divAlbum = document.createElement('div')
    divAlbum.classList.add('album')
    return albumsBox.append(divAlbum)
}

// Create album box details
const createAlbum = () => {
    const albumCover = document.createElement('div')
    albumCover.classList.add('album__cover')
    const albumDetails = document.createElement('div')
    albumDetails.classList.add('album__details')
    const createdAlbum = document.querySelector('.album:last-child')
    createdAlbum.append(albumCover, albumDetails)

    const btnBuy = document.createElement('button')
    btnBuy.classList.add('btn__buy')
    const albumTitle = document.createElement('h2')
    const albumReleased = document.createElement('p')
    albumReleased.classList.add('album__details__released')
    const albumTracks = document.createElement('p')
    albumTracks.classList.add('album__details__tracks')

    albumDetails.append(albumTitle, albumReleased, albumTracks, btnBuy)
}


// Fetch albums
const albumsFetch = fetch('./assets/albums.json')
    .then(res => res.json())
    .then(data => {
        const albumsNo = data.albums
        console.log(albumsNo.length)
        for (let i = 0; i < albumsNo.length; i++) {
            createAlbumBox()
            createAlbum()
            let cover = document.querySelector('#albums>.wrap>.album:last-child>.album__cover')
            cover.style.backgroundImage = `url('${albumsNo[i].cover}')`
            let title = document.querySelector('#albums>.wrap>.album:last-child>.album__details>h2')
            title.textContent = albumsNo[i].album
            let premiere = document.querySelector('#albums>.wrap>.album:last-child>.album__details>.album__details__released')
            premiere.textContent = `Released : ${albumsNo[i].released}`
            let tracks = document.querySelector('#albums>.wrap>.album:last-child>.album__details>.album__details__tracks')
            tracks.textContent = `Tracks : ${Object.keys(albumsNo[i].tracklist).length}`
            let cta = document.querySelector('#albums>.wrap>.album:last-child>.album__details>.btn__buy')
            cta.href = `${albumsNo[i].cdlink}`
            cta.textContent = `Buy album`
        }
    })