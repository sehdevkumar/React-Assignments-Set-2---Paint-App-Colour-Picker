

import React,{useState} from  'react';



const Selection = props => {
    const {key,applyColor} = props;

    let [background,setBackground] = useState({background:""})

    return (
        <div className="fix-box" style={background} onClick={()=>applyColor(setBackground)}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
};

export default Selection;
