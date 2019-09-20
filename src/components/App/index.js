import React from 'react';
import SideBar from '../SideBar';
import CarsHome from '../CarsHome';
import TopBar from '../TopBar';
import '../../assets/styles/Shared.css';



// class AddCarForm extends Component {

//     render() {
//         return(
//             <div>
//                 <h1>Form de carros</h1>
//                 <button onClick={this.props.dismiss}> Dismiss</button>
//             </div>
//         );
//     }

// }

const App = () => (
    <div style={{height: 100 + "%"}}>
        <SideBar />
        <TopBar />
        <CarsHome />
    </div>
)

export default App