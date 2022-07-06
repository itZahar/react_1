let commentSubmit = (obj) => {
    fetch("http://jsonplaceholder.typicode.com/comments", {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {"Content-Type": "application/json; charset=UTF-8"}
    }).then(response => response.json())
        .then(result => console.log(result))
}
export {commentSubmit}