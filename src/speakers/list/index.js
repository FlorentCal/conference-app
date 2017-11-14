import TalkService from '../../common/talk.service'

export default class SpeakerList{
    constructor() {
        this.talkService = new TalkService()
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