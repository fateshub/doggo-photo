import React,{useState, useEffect , useRef} from 'react'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'


// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)



const axios = require('axios');


const Dogo = (update) => {
    const [fact, setFact] = useState('')
    let app = useRef(null)
    let pic = useRef(null)


    var tl = gsap.timeline();
    useEffect(() => {
        axios.get("https://random.dog/woof?include=png,jpg.gif").then(function (response) {
            var data = `https://random.dog/${response.data}`
            setFact(data)

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          // eslint-disable-next-line
    }, [update])
    
useEffect(() => {
    if(update )
   { tl.to(app, 2, {y:-700,  ease: "bounce.out" ,delay: 1})
    tl.to(pic, 1, {scale: 1, opacity: 1, ease: "circ.out"})
    tl.to(pic, 1, {scale: 0, opacity: 0, ease: "circ.out", delay: 5})
    tl.to(app, 1, {y:700 , ease: "circ.out"})
}
    }
// eslint-disable-next-line
, [update])





        return (
            <div ref={el => app = el} className="container">
                <img ref={el => pic = el} className="dogoimg" src={fact} alt="catc"></img>
            </div>
        )
    }

export default Dogo
