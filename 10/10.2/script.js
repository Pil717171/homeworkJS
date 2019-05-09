class Methods {
    constructor (url) {
        this.url = url;        
    }
    
    getMethod (id) {
        const xhr = new XMLHttpRequest(); 
        if (id == null) {
            xhr.open('GET', this.url);
            xhr.send();
        } else {
            xhr.open('GET', `${this.url}/${id}`);
            xhr.send();
        }
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
    }
    postMethod (data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 201) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
    }
    putMethod (id, data) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT',  `${this.url}/${id}`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
    }
    deleteMethod (id) {
        const xhr = new XMLHttpRequest(); 
        xhr.open('DELETE', `${this.url}/${id}`);
        xhr.send();

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
    }
}

var methods = new Methods('http://localhost:3006/posts');










