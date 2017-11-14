import list from '../layout/list.html'

export default class SpeakerList{
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        $('#main-view').html(list)
        this.talkService.findAllObject('speakers').then(speakers => {
            speakers.forEach(speaker => {
                $('#list-object').append(`<a class="list-group-item" href='#speaker-detail-${speaker.id}'>${speaker.firstname} ${speaker.lastname}</a>`)
            }).catch(exception => $('#list-object').append(`<li>Error while loading speakers list ${exception}</li>`))
        })
    }
}