export default class SpeakerList{
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        this.talkService.findAllObject('speakers').then(speakers => {
            speakers.forEach(speaker => {
                $('#list-object').append(`<li><a href='#speaker-detail-${speaker.id}'>${speaker.firstname} ${speaker.lastname}</a></li>`)
            }).catch(exception => $('#list-object').append(`<li>Error while loading speakers list ${exception}</li>`))
        })
    }
}