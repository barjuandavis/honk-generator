import React from 'react'
import Morsify from 'morsify'
import './styles/form.css'
import Notification from './Notification'



export default function Form({state, setState, ...restProps}) { 
    const options = {
        dash: 'hoonk',
        dot: 'honk',
        space: 'hooonk'
    }

    const toProper = (paragraph) => {
        let s = paragraph.split(" ")
      
        const hasStopChar = function(w) {
            let stopChars = ['.','!','?']
            let flag = false
            stopChars.forEach(char => {
                if (w[w.length-1] === char) {
                flag = true
            }
            })
            return flag
        }
        const toProperCase = function(w) {
            let lowerWord = w.toLowerCase()
            let wordArray = [...lowerWord]
            wordArray[0] = wordArray[0].toUpperCase()
            return wordArray.join('')
        }

        for (let i = 0; i<s.length; i++) { 
            if (i === 0 || hasStopChar(s[i-1])) {
                s[i] = toProperCase(s[i])
            } else {
                s[i] = s[i].toLowerCase()
            }
        }
        
        return s.join(' ')
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        let converted = ""
        switch (name) {
            case "text":
                converted = Morsify.encode(value, options)
                setState({...state, 
                    text: value,
                    honk: converted
                })       
            break
            default:
                converted = Morsify.decode(value, options)
                let conAlpha = toProper(converted)
                setState({...state, 
                    text: conAlpha,
                    honk: value
                })
            break
        }
    }

    const copyToClipboard = (e) => {
        const {name} = e.target
        const textArea = document.querySelector(`#${name}`);
        navigator.clipboard.writeText(textArea.innerHTML).then(() => {
            setState({...state, notify: true, what: name })
            textArea.select()
            setTimeout(() => {
                setState({...state, notify: false, what: name })
            }, 1500)
        }, () => {
            console.log("Copy fail :(")
        })
    }

    return (
        <>
            <div className="input text">
                <div>
                    <h2>Texts</h2>
                    <button className="copy" 
                    name="text" onClick={(e) => copyToClipboard(e)}>Copy to Clipboard</button>
                </div>
                <textarea
                    id="text"
                    name="text"
                    placeholder = "Put yout plain text here."
                    value={state["text"]}
                    onChange={(e) => handleChange(e)}></textarea>
            </div>
            <div className="input honk">
                <div>
                    <h2>Honks</h2>
                    <button className="copy" 
                    name="honk" onClick={(e) => copyToClipboard(e)}>Copy to Clipboard</button>
                </div>
                <textarea
                    id="honk"
                    name="honk"
                    placeholder="honkhonkhonkhonk hoonkhoonkhoonk hoonkhonk hoonkhonkhoonk"
                    value={state["honk"]}
                    onChange={(e) => handleChange(e)}></textarea>
            </div>
            <Notification what={state.what} className={state.notify ? "notification notification--enabled": "notification"} />
           
        </>
    )
}




