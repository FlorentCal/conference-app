import template from './layout.html'
import list from './liste.html'
import speakerDetail from './speakerDetail.html'

export default  class Layout {
    render() {
        $('body').html(template)
    }

    getList(){
        $('#main-view').html(list)
    }

    getSpeakerDetail(){
        $('#main-view').html(detail)
    }

}