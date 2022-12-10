import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Form, Modal, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { storeValue, editValue } from './../store/taskReducer'

function SaveModal({ isSaveTaskModalOpen, closeSaveTaskModal, data, operation, updateId }) {
    const [taskData, setTaskData] = useState(data ? data : {});
    const dispatch = useDispatch();

    useEffect(() => {
        if (operation === 'edit') {
            setTaskData(data)
        }
        return () => {
            setTaskData({})
        }
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    }

    const onSaveOrUpdate = () => {
        if (operation === 'save') {
            taskData.time = data?.time
            dispatch(storeValue(taskData))
        } else if (operation === 'edit') {
            dispatch(editValue({ index: updateId, data: taskData }))
        }
        closeSaveTaskModal()
    }

    const resetFields = () => {
        setTaskData({})
    }


    return (
        <div>
            <Modal
                show={isSaveTaskModalOpen}
                onHide={closeSaveTaskModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Save Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Control
                                type='text'
                                name='title'
                                onChange={handleChange}
                                placeholder='Title'
                                value={taskData?.title ? taskData?.title : ''}
                            />
                            <br />
                            <Form.Control
                                as='textarea'
                                name='description'
                                rows={3}
                                onChange={handleChange}
                                placeholder='Description'
                                value={taskData?.description ? taskData?.description : ''}
                            />

                        </Col>
                    </Row>
                    <br />
                    <Row style={{ textAlign: 'right' }}>
                        <Col>
                            <ButtonGroup aria-label="Basic examp</ButtonGroup>le">
                                <Button onClick={onSaveOrUpdate}>{operation === 'save' ? 'Save' : 'Update'}</Button>
                                <Button variant='warning' onClick={resetFields}>Cancel</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default SaveModal