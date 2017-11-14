import detail from '../layout/sessionDetail.html'

export default class SpeakerDetails{
    constructor(talkService){
        this.talkService = talkService
    }

    render(idSession){
        $('#main-view').html(detail)
        this.talkService.findObjectById('sessions', idSession)
            .then(session => {
                $('h1#title').append(`${session.title}`)
                $('#note').append(`  
                <div class="row col-4 offset-4">
                    <a class="btn btn-danger col-12" href="#note-session-${session.id}" role="button">  Mes Notes </a>
                </div>`)
                $('#desc').append(`${session.desc}`)
                session.speakers.forEach(idSpeaker => {
                    this.talkService.findObjectById('speakers', idSpeaker).then(speaker => {
                        $('#retour').html(`
                        <a class="navbar-brand" href="#sessions-list">
                            <img  height="30" src="/src/images/retour.png"
                            alt="retour">
                        </a>`
                        )
                        $('#speakers').append(`
                            <div class="bordered col-8 offset-2">
                                <a class="col" href="#speaker-detail-${speaker.id}">
                                    <div class="row">
                                        <div class="col-3">
                                            <img class="round col" src="/src/images/${speaker.image}"/>
                                        </div>
                                        <div class="col-9">
                                            <h2 class="big-font">${speaker.lastname} ${speaker.firstname}</h2>
                                        </div>
                                    </div>
                                </a>
                            <div>`)
                    })
                })
            }).catch(exception => $('h1#title').append('Error while loading session : ' + exception))
    }
}