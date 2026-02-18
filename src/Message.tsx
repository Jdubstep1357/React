// PascalCasing
function Message() {
    // JAX - Javascript HTML
    const name = 'Mosh';
    // { } references anything of value
    if(name)
        return <h1>Hello { name }</h1>
    return <h1>Not true name</h1>
}

export default Message;