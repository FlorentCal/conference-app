export default class SessionList{
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        this.talkService.findAllObject('sessions').then(sessions => {
            let view = ''
            sessions.forEach(session => {
                view  += session.title
            })
            $('#session-list').html(view)
        })
    }
}