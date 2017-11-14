import accueil from '../layout/accueil.html'

export default class Accueil{
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        $('#main-view').html(accueil)
        
    }
}