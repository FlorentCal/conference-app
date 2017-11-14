export default class SpeakerDetails{
    constructor(talkService){
        this.talkService = talkService
    }

    render(idSpeaker){
        talkService.findObjectById('speakers', idSpeaker)
            .then(speaker => {
                $('h1#title').append(`${speaker.lastname} ${speaker.firstname}`)
                $('#image').append(`<img src='${speaker.image}' title='${speaker.lastname} ${speaker.firstname}' alt='Image presentateur'/>`)
                speaker.socials.forEach((social) => {
                    $('#speaker-socials').append(`<li><a href='${social.link}'>${social.class}</a></li>`)
                })
                $('#presentation').append(`<p>${speaker.about}</p>`)
            }).catch(exception => $('h1#title').append('Error while loading speaker : ' + exception))
    }
}