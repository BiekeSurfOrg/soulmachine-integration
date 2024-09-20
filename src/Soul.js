import Spinner from "./Spinner";
import { useEffect, useState } from 'react';
import {createScene} from './soulIntegration';

function Soul() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        createScene(setLoading)
    }, []);
  
    return (
    <> 
       {loading ? <Spinner></Spinner> : ""} 
        <video id="sm-video" width="100%" height="100%" style={{ visibility: loading ? 'hidden' : 'visible' }}></video>
    </>
    );
}

export default Soul;