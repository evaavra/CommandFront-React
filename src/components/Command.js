//import { useState } from "react";
import axios from "axios"
import React from "react"

export default function Command({ command, setCommand, commandlist, setCommandlist }) {
    const handleDelete = () => {
        axios({
            url: "https://localhost:44335/api/commands/" + command.id,
            method: "DELETE",
        })
            .then((res) => { })
            .catch((err) => { })
        setCommandlist(commandlist.filter(comm => comm.id !== command.id))
    }

    const handleUpdate = () => {
        setCommand({ id: command.id, howTo: command.howTo, line: command.line, platform: command.platform })
    }

    return (
            <React.Fragment>
                    <td>{command.howTo}</td>
                    <td>{command.line}</td>
                    <td>{command.platform}</td>
                    <td>
                        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                        <button onClick={handleUpdate} className="btn btn-warning">Update</button>
                    </td>
            </React.Fragment>

    )
}