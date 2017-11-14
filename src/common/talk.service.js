
export default class TalkService {

    findAllObject(objectType) {
            return $.get('http://localhost:3000/' + objectType)
    }

    findObjectById(objectType, id) {
        return $.get('http://localhost:3000/' + objectType + `/${id}`)
    }

}