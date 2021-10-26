export function generateUser(formData){
    console.log(formData.get('name'));

    return {
        completed: {},
        love: 0,
        confidence: 0,
        name: formData.get('name'),
        character: formData.get('character'),
    };
}




export function setUser(userObject){
    localStorage.setItem('USER', JSON.stringify(userObject));
}

export function findById(array, id){
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
export default findById;

export function getUser() {
    const json = localStorage.getItem('USER');
    const parse = JSON.parse(json);
    console.log(parse);
    if (!parse) return null;
    //const user = parse.name.toUpperCase();
    return parse;
}