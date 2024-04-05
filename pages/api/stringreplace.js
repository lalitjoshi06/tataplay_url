const replacements = {
   
    //"https://delta10tatasky.akamaized.net/out/i/6574644.mpd": "https://bpprod4linear.akamaized.net/bpk-tv/irdeto_com_Channel_412/output/manifest.mpd",
    //"https://delta13tatasky.akamaized.net/out/i/2285199.mpd": "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_251/output/manifest.mpd",
    //"https://bpweb1.akamaized.net": "http://localhost:1337/bpweb1.akamaized.net",
    //"https://bpweb2.akamaized.net": "http://localhost:1337/bpweb2.akamaized.net",
    //"https://bpweb3.akamaized.net": "http://localhost:1337/bpweb3.akamaized.net",
    //"https://bpweb4.akamaized.net": "http://localhost:1337/bpweb4.akamaized.net",
    //"https://bpweb5.akamaized.net": "http://localhost:1337/bpweb5.akamaized.net",
    //"https://bpweb6.akamaized.net": "http://localhost:1337/bpweb6.akamaized.net",
    //"https://bpweb7.akamaized.net": "http://localhost:1337/bpweb7.akamaized.net",
};

export const replacestrings = (inputString) => {
    for (const [search, replace] of Object.entries(replacements)) {
        inputString = inputString.replace(new RegExp(search, 'g'), replace);
    }
    return inputString;
};
