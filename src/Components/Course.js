import React from 'react';
class Course extends React.Component {
    render() {
        return (
            <div>
                <hr></hr>
                <Letter image='./logo192.png'></Letter>
                <Letter image='./logo192.png'></Letter>
                <Letter image='./logo192.png'></Letter>
                <Letter image='./logo192.png'></Letter>
                <Letter image='./logo192.png'></Letter>
            </div>
        );
    }
}
function Letter(props) {
    let style =
    {
        height: '200px',
        backgroundColor : ' rgb(150, 180, 209)'
    }
    return (
        <div style={style}>
            <div className='image'>
                <img src={props.image}></img>
            </div>
            <div className='CourseContent'>
                <h4>Hướng dẫn học React JS</h4>
                <div>Protected by Nguyen Nhan | Th2 23 2016 | JavaScript</div>
                <div>
                    React |
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio lectus,
                    lobortisficitur felis eget....
                </div>
                <button>Read More</button>
            </div>
        </div>
    );
}
export default Course;
