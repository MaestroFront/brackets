module.exports = check = (str, config) => {
    let array = [];
    config.forEach(item => array.push(item.join('')));
    do {
        array.forEach((item => str = str.replaceAll(item, '')))
    } while (
        str.includes('()') || str.includes('[]') || str.includes('{}') ||
        str.includes('||') || str.includes('12') || str.includes('34') ||
        str.includes('56') || str.includes('77') || str.includes('88')
    )
    return str.length === 0;
}