import React from 'react';
class New extends React.Component {
    render() {
        return (
            <div >
                <div className='new'>
                    <div className='BaiVietMoi'>
                        <div className='bvmChild'>Bài Viết Mới</div>
                    </div>
                    <NewFeed image='./logo192.png'></NewFeed>
                    <NewFeed image='./logo192.png'></NewFeed>
                    <NewFeed image='./logo192.png'></NewFeed>
                </div>
            </div>
        );
    }
}
function NewFeed(props) {
    let style =
    {
        height: '110px',
        backgroundColor: ' rgb(150, 180, 209)'
    }
    return (
        <div style={style}>
            <div className='image2'>
                <img src={props.image}></img>
            </div>
            <div>
                <h4>Áp dụng các chiêu thức võ học vào lập trình</h4>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </div>
    );
}
export default New;
