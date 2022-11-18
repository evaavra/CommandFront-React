import Header from '../components/Header';
import {useState} from 'react';
import CommandList from '../components/CommandList';
import Form from '../components/Form';
import axios from 'axios';
import {useEffect} from 'react';

export default function CommandsPage() {
 const [commandlist, setCommandlist] = useState([]);
  useEffect(() => {axios({
    url: "https://localhost:44335/api/commands",
    method: "GET",
})
.then((res) => { setCommandlist(res.data) })
.catch((err) => { })
  }, [])
  const [command, setCommand] = useState({id: 0, howTo: "", line: "", platform: ""})
  //const [commandlist, setCommandlist] = useState([]);
  return (
    <div>
      <Header></Header>
      <Form command={command} setCommand={setCommand} commandlist={commandlist} setCommandlist={setCommandlist}></Form>
      <CommandList commandlist={commandlist} setCommandlist={setCommandlist} command={command} setCommand={setCommand}></CommandList>
    </div>
  );
}
