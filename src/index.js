
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import './css/theme.css'

import TalkService from './common/talk.service'
import SpeakerList from './speakers/list'
import SpeakerDetail from './speakers/detail'
import SessionList from './sessions/list'
import SessionDetail from './sessions/detail'

import Accueil from './accueil/accueil'

import Layout from './layout/index'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()

/*
talkService.findAllObject('speakers').then(speakers => 
    speakers.forEach(speaker => {
        console.log(speaker.firstname + ' ' + speaker.lastname)
    }
)).catch(console.log('There was an error while loading speakers'))

talkService.findAllObject('sessions').then(sessions => 
    sessions.forEach(session => {
        console.log(session.title)
    }
)).catch(console.log('There was an error while loading sessions'))

talkService.findObjectById('speakers', 'afouques').then(speaker => 
    console.log(speaker.id + ' : ' + speaker.firstname + ' ' + speaker.lastname)
).catch(console.log('There was an error while loading the speaker with id afouques'))

talkService.findObjectById('sessions', 's3').then(session => 
    console.log(session.id + ' : '+ session.title)
).catch(console.log('There was an error while loading the speaker with id s3'))
*/
let layout = new Layout();
layout.render();

const speakersList = new SpeakerList(talkService)
const speakerDetail = new SpeakerDetail(talkService)
const sessionsList = new SessionList(talkService)
const sessionDetail = new SessionDetail(talkService)

const accueil = new Accueil(talkService)

var router = () => {
    const id= location.hash.split("-")[2]
    if (location.hash == '#speakers-list') {  
        speakersList.render()
    } else if(location.hash == `#speaker-detail-${id}`){
        speakerDetail.render(id) 
    } else if (location.hash == '#sessions-list') { 
        sessionsList.render()
    }
    else if (location.hash == `#session-detail-${id}`) { 
        sessionDetail.render(id)
    }else if (location.hash == '#accueil') { 
        accueil.render();
    } else {
        console.log(location.hash)
    }
}
    
window.addEventListener('load', () => {

    window.onhashchange = () => {
        router()
    }
    
    router()
})
