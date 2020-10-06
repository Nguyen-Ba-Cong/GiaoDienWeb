import React from 'react';
class SignUp extends React.Component {
    render() {
        return (
            <div className='SignUp' >
                <form>
                    <h3>Đăng ký nhận bài viết mới</h3>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio lectus,
                        lobortisficitur felis eget  Lorem ipsum dolor sit amet, consectetur adipiscing
                        lobortisficitur felis eget. Donec odio lectus  elit.
                    </div>
                    <input className='onForm' placeholder='Tên của bạn'></input>
                    <input className='onForm' placeholder='Email của bạn'></input><br></br>
                    <input type='checkbox'></input>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio lectus,</label>
                    <button className='onForm'>Đăng Ký</button>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio lectus,
                        lobortisficitur felis eget  Lorem ipsum dolor sit amet, consectetur adipiscing
                        lobortisficitur felis eget. Donec odio lectus  elit.
                    </div>
                </form>           
            </div>
        );
    }
}

export default SignUp;
