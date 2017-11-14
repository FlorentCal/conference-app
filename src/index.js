
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service'
import SpeakerList from './speakers/list/index'
import SessionList from './sessions/list/index'

import Layout from './layout/index'

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()

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

let layout = new Layout();
layout.render();

const speakerList = new SpeakerList(talkService)

const sessionList = new SessionList(talkService)

let routerMap = new Map([
    ['#speaker-list', speakerList],
    ['#session-list', sessionList]
]) 



var router = () => {
    if (routerMap.has(location.hash)) {
        routerMap.get(location.hash).render()
    } else {
    
    }
}
    
window.addEventListener('load', () => {

    window.onhashchange = () => {
        router();
    };
    
    router();
});
