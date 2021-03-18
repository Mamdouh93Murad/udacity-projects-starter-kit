const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async () => {
    /**
     * TODO
     *  - Get Value of the input for URL
     *  - Check if it's URL or not
     *      yes
     *          send it to the backend
     *      no
     *          show user message it's not valid URL
     */
    const url = 'value from user'
    if(CheckURL(url))
    {
        post("http://localhost:8081/add-url", {url}).then(data =>{
            document.getElementById('polarity').innerHTML = 'Polarity: ${data.score_tag}`
        })
    }
    else{
        alert('please enter valid url')
    }
}

export default handleSubmit
