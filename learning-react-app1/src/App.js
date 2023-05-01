import './App.css';
import Form from './components/Form';
import Form2 from './components/Form2';
import Props from './components/Props';
import State from './components/State';
import MouseClick from './components/MouseClick'
import ParentComp from './components/ParentComp';
import UserGreating from './components/UserGreating';
import NameList from './components/NameList';
import PostList from './components/PostList';
import PostList2 from './components/PostList2';

function App() {
  return (
    <div className="App">
      <Props name="Keshav" callingName="kiki">
      <p>Hi kiki</p>
      <h1>wow!!</h1>
    </Props>
    <State></State>
    <MouseClick></MouseClick>
    <ParentComp></ParentComp>
    <UserGreating></UserGreating>
    <NameList></NameList>
    <Form></Form>
    {/* <Form2></Form2> */}
    {/* <PostList></PostList> */}
    <PostList2></PostList2>
    </div>
  );
}

export default App;
