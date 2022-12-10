import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SaveModal from './SaveModal';

function Tasks() {
    const task = useSelector(state => state.task)
    const [isSaveTaskModalOpen, setIsSaveTaskModalOpen] = useState(false)
    const [taskData, setTaskData] = useState({});
    const [updateId, setUpdateId] = useState();

    const openEditTaskModal = (data, index) => {
        setTaskData(data)
        setUpdateId(index)
        setIsSaveTaskModalOpen(true)
    }

    const closeSaveTaskModal = () => {
        setIsSaveTaskModalOpen(false)
    }

    const editModal = () => {
        return (
            <SaveModal
                data={taskData}
                isSaveTaskModalOpen={isSaveTaskModalOpen}
                closeSaveTaskModal={closeSaveTaskModal}
                operation='edit'
                updateId={updateId}
            />
        )
    }

    return (
        <div>
            {isSaveTaskModalOpen && editModal()}
            <Row>
                {task?.taskList?.map((item, index) => (
                    <Col sm='4' md='4' lg='4'>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col>
                                        {item?.title}
                                    </Col>
                                    <Col>{item?.time}</Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <p align='left'>{item?.description}</p>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    onClick={() => openEditTaskModal(item, index)}
                                >edit</Button>&nbsp;

                            </Card.Footer>
                        </Card>

                    </Col>

                ))}
            </Row>
        </div>
    )
}

export default Tasks