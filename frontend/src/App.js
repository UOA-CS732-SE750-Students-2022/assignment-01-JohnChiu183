import {Button} from 'antd';
import './App.css';
import AddMemberPage from './pages/AddMemberPage';
import MemberViewPage from './pages/MembersViewPage';

function App() {
  return (
    <div>
        <AddMemberPage />
        <MemberViewPage />
    </div>
  );
}

export default App;
