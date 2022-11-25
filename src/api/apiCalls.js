import axios from "axios"

export const changelanguage = language => {
    axios.defaults.headers['accept-language'] = language;
}



