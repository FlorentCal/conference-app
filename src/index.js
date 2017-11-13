
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service';

// intégration JQuery
window.$ = window.jQuery = require('jquery');

const talkService = new TalkService()

talkService.findAllObject('speakers').then(speakers => 
    speakers.forEach(speaker => {
        console.log(speaker.firstname + ' ' + speaker.lastname)
    }
))

talkService.findAllObject('sessions').then(sessions => 
    sessions.forEach(session => {
        console.log(session.title)
    }
))
