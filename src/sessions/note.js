import note from '../layout/noteSession.html'

export default class noteSession{
    constructor(talkService) {
        this.talkService = talkService
    }

    render(idSession){
        $('#main-view').html(note)
        this.talkService.findObjectById('sessions', idSession)
            .then(session => {
                
                $('h1#title').append(`${session.title}`)
                $('#note').append(` <textarea name="textarea" id="noteArea" rows="10" cols="50" class="col-6 offset-4"></textarea>`)
                $("#save").append(`<a id="enregistrerButton" class="btn btn-success col-2 offset-6" href="#session-detail-${session.id}">Enregistrer</a>`);
              //  $('#retour').append(`<a id="enregistrerButton" class="btn btn-success col-2 offset-6" href="#session-detail-${session.id}">Enregistrer</a>`);
             

                

                $('#noteArea').val(localStorage.getItem(`note-session-${idSession}`))
                $("#enregistrerButton").attr('onclick',`localStorage['note-session-${idSession}'] = document.getElementById('noteArea').value;`)

              
            })
    }
}