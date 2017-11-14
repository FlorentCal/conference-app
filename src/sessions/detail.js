import detail from '../layout/sessionDetail.html'

export default class SpeakerDetails{
    constructor(talkService){
        this.talkService = talkService
    }

    render(idSpeaker){
        $('#main-view').html(detail)
        this.talkService.findObjectById('sessions', idSession)
            .then(session => {
                $('h1#title').append(`${sessions.title}`)
                $('#desc').append(`${session.desc}`)
                session.speakers.forEach(idSpeaker => {
                    this.talkService.findSpeakerById(idSpeaker).then(speaker => {
                            $('#speakers').append(`
                            <div class='row speakers'>
                                <div>
                                    <img class='img-fluid' src='/src/images/${speaker.image}'/>
                                </div>
                                <div>
                                    <a href='#speaker-detail-${speaker.id}'>${speaker.lastname} ${speaker.firstname}</a>
                                </div>
                            </div>`);
                    })
                })
            }).catch(exception => $('h1#title').append('Error while loading session : ' + exception))
    }
}