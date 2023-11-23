import "./App.css";
import { users } from './mockData/user';
import Card from "./components/card/Card";

function App() {
    return (
        <div className='App'>
            <div className='main-container'>
                {users.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default App;
