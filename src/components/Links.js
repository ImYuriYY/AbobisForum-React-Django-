import React from 'react'

class Links extends React.Component {
    render() {
        return (
            <div className='global-theme'>
                <p className='global-theme-title'>Our links</p>
                <ul className='global-theme-list'>
                    <li className='social-network'>
                        <a href='https://vk.com/im_yc'>VK - Forum owner VK</a>
                    </li>
                    <li className='social-network'>
                        <a href='https://t.me/Bad1l1'>Telegram - Forum owner Telegram</a>
                    </li>
                    <li className='social-network'>
                        <a href='https://github.com/ImYuriYY'>GitHub - Forum owner GitHub</a>
                    </li>
                    
                </ul>
            </div>
        )
    }



}

export default Links