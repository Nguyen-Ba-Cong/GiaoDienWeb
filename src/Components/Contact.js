import React from 'react';
import SignUp from './SignUp';
import New from './New';
class Contact extends React.Component {
    render() {
        return (
            <div className='Contact'>
                <SignUp></SignUp>
                <New></New>
            </div>
        );
    }
}
export default Contact;
