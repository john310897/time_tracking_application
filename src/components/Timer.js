import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import SaveModal from './SaveModal';
function Timer() {
    const [time, setTime] = useState(0)
    const [timeInterval, setTimerInterval] = useState();
    const [timerState, setTimerState] = useState()
    const [isSaveTaskModalOpen, setIsSaveTaskModalOpen] = useState(false)
    const [taskData, setTaskData] = useState({});


    const onStart = () => {
        setTimerState(true)
        setTimerInterval(
            setInterval(() => {
                setTime(time => time + 10)
            }, 10)
        )
    }

    const onPause = () => {
        setTimerState(false)
        clearInterval(timeInterval)
    }

    const openSaveModal = (data) => {
        let h, m, s;
        h = ("0" + Math.floor((data / 60000) % 60)).slice(-2) + ":"
        m = ("0" + Math.floor((data / 1000) % 60)).slice(-2) + ":"
        s = ("0" + ((data / 10) % 100)).slice(-2)
        taskData['time'] = h + m + s;
        setIsSaveTaskModalOpen(true)
    }



    const closeSaveTaskModal = () => {
        setTaskData({})
        setIsSaveTaskModalOpen(false)
    }
    const saveTaskModal = () => {
        return (
            <SaveModal
                data={taskData}
                isSaveTaskModalOpen={isSaveTaskModalOpen}
                closeSaveTaskModal={closeSaveTaskModal}
                operation='save'
            />
        )
    }
    return (
        <div>
            {isSaveTaskModalOpen && saveTaskModal()}
            <Card>
                <Card.Header>
                    <span><b>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</b></span>
                    <span><b>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</b></span>
                    <span><b>{("0" + ((time / 10) % 100)).slice(-2)}</b></span>
                </Card.Header>
                <Card.Body>
                    <Button
                        onClick={onStart}
                        disabled={timerState}
                    >Start</Button>&nbsp;
                    <Button
                        onClick={onPause}
                        disabled={timerState === false ? true : false}
                    >Pause</Button>&nbsp;
                    <Button
                        onClick={() => openSaveModal(time)}
                    >Save</Button>&nbsp;
                </Card.Body>
            </Card>

        </div>
    )
}

export default Timer