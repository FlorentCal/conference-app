
export default class TalkService {

    findAllObject(objectType) {
        return new Promise((resolve, reject) => {
            $.get('http://localhost:3000/' + objectType, result => {
                if(result) {
                    resolve(result)
                } else {
                    reject(`Oops, there was an error while loading ${objectType}`)
                }
            })
        })
    }

}