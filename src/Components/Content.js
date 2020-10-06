import React from 'react';
import Title from './Title';
import Course from './Course';
class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <Title></Title>
                <Course></Course>
            </div>
        );
    }
}
export default Content;
