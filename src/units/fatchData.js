export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a223b1678bmsh38b2a4b803baae7p1918fejsna35955ccffd8',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};