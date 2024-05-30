import { useState, useEffect } from "react";
import "./Typewriter.css"

const Typewriter = () => {

    const strings = [
        'Full Stack Developer',
        'Prompt Engineer',
        'Problem Solver'
    ]

    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentString, setCurrentString] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(()=>{
        if(isTyping){
            if(currentString === strings[currentStringIndex]){
                setTimeout(()=>{
                    setIsTyping(false);
                },500)
            }else{
                const timeout = setTimeout(()=>{
                    setCurrentString(strings[currentStringIndex].slice(0,currentString.length+1))
                },100)
                return () => clearTimeout(timeout);
            }
        }else{
            if(currentString===''){
                setCurrentStringIndex((prevIndex)=> (prevIndex+1)%strings.length);
                setIsTyping(true);
            }else{
                const timeout = setTimeout(() => {
                    setCurrentString(currentString.slice(0, currentString.length - 1));
                  }, 50); 
                  return () => clearTimeout(timeout);
            }
        }
    }, [currentString, currentStringIndex, isTyping]);

    return ( 
        <div className="typewriter-text">
            {currentString}
        </div>
     );
}
 
export default Typewriter
