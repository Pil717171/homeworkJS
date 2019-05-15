class Methods {
    constructor (url) {
        this.url = url;   
    }
    
    getMethod (id) {
        fetch(`${this.url}/${id}`)
        .then((res) => {
            if (res.status !== 200) {
                console.log('Error GET')
            }
            return res.json();
        })
        .then((res) => {
            console.log(res)
        })
    }
    postMethod (data) {
        fetch(this.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if(res.status !== 201) {
                console.log('Error POST')
            }
            return res.json();
        })
        .then((res) => {
            console.log(res);
        })
    }
    putMethod (id, data) {
        fetch(`${this.url}/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if(res.status !== 200) {
                console.log('Error PUT')
            }
            return res.json();
        })
        .then((res) => {
            console.log(res);
        })
    }
    deleteMethod(id) {
        fetch(`${this.url}/${id}`, {
            method: 'delete'
        })
        .then((res) => {
            if(res.status !== 200) {
                console.log('Error DELETE')
            }
            return res.json()
        })
    }
}

var methods = new Methods('http://localhost:3006/posts');

// methods.getMethod(1);
// methods.postMethod({"fieldName5": "Content5", "fieldName6": "Content6"});
// methods.putMethod(38, {'kdnvkd':'dkjvnsdklvndslk'});
// methods.deleteMethod(1);










