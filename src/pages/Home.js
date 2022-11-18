import './Home.css'

function Home() {
    var netCoreLogo = require('../img/netcore.png');
    var reactLogo = require('../img/react-logo.webp')
    return (
        <div className="container">
            <h1>Commands project</h1>
            <p>It is my first try to implement a crud system with the following techologies:</p>
            <div className='row'>
                <div className='col-md-6'>
                    <ul>
                        <li>Front end development with React js</li>
                    </ul>
                </div>
                <div className='col-md-6'>
                    <ul>
                    <li>Back end development with .Net core 3.1</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={reactLogo} alt="react logo" width="600" height="400"></img>
                </div>
                <div className='col-md-6'>
                    <img src={netCoreLogo} alt=".net-core logo" width="600" height="400"></img>
                </div>
            </div>
            
            <p id="comtab">Go to commands tab to create, update and delete new commands!</p>
        </div>
    )
}

export default Home;