export default class SpeakerList{
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        this.talkService.findAllObject('speakers').then(speakers => {
            let view = ''
            speakers.forEach(speaker => {
                view  += speaker.firstname + ' ' + speaker.lastname
            })
            $('#main-view').html(view)
        })
    }
}