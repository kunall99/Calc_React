let Input = (props) => {
    return(
        <input 
            className = "input-box"
            type = "number"
            onChange={(e) => {  
                props.handleCurrInput(e.currentTarget.value);
            }}
            onBlur={(e) => {
                if(props.count == 0)
                    props.updateValue1();
                else
                    props.updateValue2();
            }}
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    if(props.count == 0)
                        props.updateValue1();
                    else
                        props.updateValue2();
                }
            }}
            value = {props.currInp}
        />
    );
};

export default Input;