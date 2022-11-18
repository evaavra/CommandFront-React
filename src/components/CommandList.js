import Command from "./Command"

export default function CommandList({ commandlist, setCommandlist, command, setCommand }) {

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">How to</th>
                        <th scope="col">Line</th>
                        <th scope="col">Platform</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {commandlist.map(command => <tr><Command command={command} setCommand={setCommand} commandlist={commandlist}
                        setCommandlist={setCommandlist}></Command></tr>)}
                </tbody>
            </table>
        </div>
    )
}