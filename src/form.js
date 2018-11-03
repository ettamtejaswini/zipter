import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div className="input-text-box-div">
            <label className='required-form'>Name</label>
                <p>(As mentioned in Aadhar card)</p>
                <input className="input-text-box" type="text" name="fname" placeholder="Enter your answer" maxLength={100} autoFocus= {true} required/><br></br>
                <button onClick= {() => {}} className="button-class-show" >Submit</button>
            </div>
        );
    }
}

export default Form;