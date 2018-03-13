function fetchDataUrl(path) {
    const url = `http://150.95.26.138:3000/api/${path}`;
    
    return fetch(url).then(res => res.json())
}

export function fetchData(scopeName){
    return fetchDataUrl(scopeName)
}