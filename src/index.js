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
import Note from './sessions/note'
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
const accueilConference = new Accueil(talkService)
const noteSession = new Note(talkService)

let routerMap = new Map([
    ['#accueil-conference', accueilConference],
    ['#speakers-list', speakersList],
    ['#speaker-detail', speakerDetail],
    ['#sessions-list', sessionsList],
    ['#session-detail', sessionDetail],
    ['#note-session', noteSession]
])

var router = () => {
    let route = location.hash.split('-')
    routerMap.get(route[0]+'-'+route[1]).render(route[2])
}
    
window.addEventListener('load', () => {

    window.onhashchange = () => {
        router()
    }
    
    router()
})
