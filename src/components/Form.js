import axios from "axios"

export default function Form({ command, setCommand, commandlist, setCommandlist }) {
    const handleChangeHowTo = (event) => {
        setCommand(previousCommand => ({ ...previousCommand, howTo: event.target.value }))

    }
    const handleChangeLine = (event) => {
        setCommand(previousCommand => ({ ...previousCommand, line: event.target.value }))
    }
    const handleChangePlatform = (event) => {
        setCommand(previousCommand => ({ ...previousCommand, platform: event.target.value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (command.id === 0) {
            axios({
                url: "https://localhost:44335/api/commands",
                method: "POST",
                headers: {

                },
                data: command,
            })
                .then((res) => {
                    console.log(res.data.id)
                    axios({
                        url: "https://localhost:44335/api/commands/" + res.data.id,
                        method: "GET",
                    })
                        .then((res) => { setCommandlist([...commandlist, res.data]) })
                        .catch((err) => { })
                })
                .catch((err) => { })
        } else {
            axios({
                url: "https://localhost:44335/api/commands/" + command.id,
                method: "PUT",
                headers: {

                },
                data: command,
            })
                .then((res) => {
                    axios({
                        url: "https://localhost:44335/api/commands",
                        method: "GET",
                    })
                        .then((res) => { setCommandlist(res.data) })
                        .catch((err) => { })
                }).catch((err) => { })
        }
        setCommand({ id: 0, howTo: "", line: "", platform: "" })

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-group">
                <br/>
                <input placeholder="Add How to" value={command.howTo} onChange={handleChangeHowTo} className="form-control"></input><br/>
                <input placeholder="Add Line" value={command.line} onChange={handleChangeLine} className="form-control"></input><br/>
                <input placeholder="Add Platform" value={command.platform} onChange={handleChangePlatform} className="form-control"></input>
                <br/>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}