import list from '../layout/list.html'

export default class SessionList{
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        $('#main-view').html(list)
        this.talkService.findAllObject('sessions').then(sessions => {
            $('#retour').html(`
            <a class="navbar-brand" href="#accueil-conference">
                <img  height="30" src="/src/images/retour.png"
                alt="retour">
            </a>`
            )
            $('h1').append('Liste des sessions')
            sessions.forEach(session => {
                $('#list-object').append(`<a class='list-group-item' href='#session-detail-${session.id}'>${session.title}</a>`)
            }).catch(exception => $('#list-object').append(`<li>Error while loading sessions list ${exception}</li>`))
        })
    }
}