import ract, { uaeState, useState} from 'react'

const List = () => {
    const [tasks, seTasks] = useState([]);
    const [newTask, setNewTask] = useState("")

    const handleInputChange = (event) => {

    }

    const addList = () =>{

    }
    
    const deleteList = (index) => {

    }

    const editList = (index) => {

    }

    <ol>
        {/* xxx.map((list, index) => */}
        <li>
            <button className="delete-button"></button>
        </li>
    </ol>

    return (
        <div>
            <h1 className="display-6">Creat Your Team</h1>
            <Form>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Create Team</Form.Label>
                            <Form.Control type="email" placeholder="Create Team" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Pokemon</Form.Label>
                            <Form.Control type="password" placeholder="Select.." />
                        </Form.Group>
                    </div>
                </div>
                <Button variant="primary" type="submit">
                    Add Data
                </Button>
            </Form>
        </div>
    )
}

export default List