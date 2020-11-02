import React from 'react'
import { useHistory } from "react-router-dom";

import LogoAnimate from '../components/LogoAnimate'

const AnimationLoader = () => {
    const history = useHistory();

    setTimeout(() => {
        history.push("/signin");
      }, 6000);
    
    return(
        <LogoAnimate />
        )
    }

export default AnimationLoader;

