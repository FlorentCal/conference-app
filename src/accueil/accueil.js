import accueil from '../layout/accueil.html'

export default class Accueil{
    constructor(talkService) {
        this.talkService = talkService
    }

    render() {
        $('#main-view').html(accueil)
        $('#retour').html(`
        <a class="navbar-brand" href="#accueil-conference">
            <img  height="30" src="/src/images/retour.png"
            alt="retour">
        </a>`
        )
        
    }
}