import list from '../layout/list.html'

export default class SessionList{
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        $('#main-view').html(list)
        this.talkService.findAllObject('speakers').then(speakers => {
            speakers.forEach(speaker => {
                $('#list-object').append(`<a class="list-group-item" href='#session-detail-${session-id}'>${session.title}</a>`)
            }).catch(exception => $('#list-object').append(`<li>Error while loading sessions list ${exception}</li>`))
        })
    }
}