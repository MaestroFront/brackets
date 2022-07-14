const check = (str) => {
    const array = ['()', '[]', '{}', '||', '12', '34', '56', '77', '88'];
    for (let i = 0; i < array.length; i++){
        do {
            array.forEach((item => str = str.replace(item, '')))
        } while (str.includes(array[i]))
    }
    return str.length > 0 ? false : true;
}