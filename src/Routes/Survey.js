import React, { useState } from "react";
import { Container, Stack, Button } from "@mui/material";
import "../CSS/survey.css"
import Tag from "../Components/Tag";
import {Formik, Field, Form} from 'formik';
import { useNavigate } from 'react-router-dom';

function Survey() {

    const navigate = useNavigate();

    return(
        <Container className="wrapper" maxWidth="1">
            <h2>Call rating</h2>
            <Formik
                initialValues={{
                    solved: '',
                    service: '',
                    user: '',
                    strategies: '',
                    call: '',
                    problem: '',
                    review: '',
                    reason: '',
                }}
                onSubmit={async (values) => {
                    console.log(JSON.stringify(values, null, 2));

                    // Para obtener el estatus del agente
                    // agent.getState( )
                    console.log("Not available")

                    // Para mandar el video 
                    /*
                        Post S3
                        Request:
                        PUT /my-image.mp4 HTTP/1.1
                        {
                            Host: myBucket.s3.<Region>.amazonaws.com
                            Date: Wed, 12 Oct 2009 17:50:00 GMT
                            Authorization: authorization string
                            Content-Type: text/plain
                            Content-Length: 11434
                            x-amz-meta-author: Janet
                            Expect: 100-continue
                            [11434 bytes of object data]
                        }
                        Response:
                        HTTP/1.1 200 OK
                    */
                    console.log("Saved in S3")

                    // Para cambiar el estatus a disponible ya que se envía el cuestionario
                    // agent.setState( )
                    console.log("Available")

                    navigate("/home");
                }}
            >
                {({ values }) => (
                    <Form>
                        <h4>Was the issue solved?</h4>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <label><Field type='radio' name='solved' value='Solved' style={{display: "none"}}/><Tag title="Solved" key="1"/></label>
                            <label><Field type='radio' name='solved' value='Not solved' style={{display: "none"}}/><Tag title="Not solved" key="2"/></label>
                        </Stack>
                        <h4>Product ID / attended service.</h4>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <label><Field type='checkbox' name='service' value='Account error' style={{display: "none"}}/><Tag title="Service - account error" key="3"/></label>
                            <label><Field type='checkbox' name='service' value='Shipping problem' style={{display: "none"}}/><Tag title="Service - shipping problem" key="4"/></label>
                            <label><Field type='checkbox' name='service' value='Arrived damaged' style={{display: "none"}}/><Tag title="Product - arrived damaged" key="5"/></label>
                        </Stack>
                        <h4>Select the elements that apply with this call user.</h4>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <label><Field type='checkbox' name='user' value='Happy' style={{display: "none"}}/><Tag title="User - happy" key="6"/></label>
                            <label><Field type='checkbox' name='user' value='Impatient' style={{display: "none"}}/><Tag title="User impatient" key="7"/></label>
                            <label><Field type='checkbox' name='user' value='calm' style={{display: "none"}}/><Tag title="User - calm" key="8"/></label>
                            <label><Field type='checkbox' name='user' value='loyal' style={{display: "none"}}/><Tag title="User - loyal" key="9" /></label>
                        </Stack>
                        <h4>Select the strategies used to help this user.</h4>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <label><Field type='checkbox' name='strategies' value='Internet search' style={{display: "none"}}/><Tag title="Internet search" key="10"/></label>
                            <label><Field type='checkbox' name='strategies' value='Company documentation search' style={{display: "none"}}/><Tag title="Company documentation search" key="11"/></label>
                            <label><Field type='checkbox' name='strategies' value='Search in previously solved problems' style={{display: "none"}}/><Tag title="Search in previously solved problems" key="12"/></label>
                        </Stack>
                        <h4>How was the call quality within Amazon RSH services?</h4>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <label><Field type='radio' name='call' value='High' style={{display: "none"}}/><Tag title="High" key="13"/></label>
                            <label><Field type='radio' name='call' value='Medium' style={{display: "none"}}/><Tag title="Medium" key="14"/></label>
                            <label><Field type='radio' name='call' value='Low' style={{display: "none"}}/><Tag title="Low" key="15"/></label>
                        </Stack>
                        <h4>In case the quality was medium or low, select the problems that arose in the system.</h4>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <label><Field type='checkbox' name='problem' value='Quality issue because of element in the recording not working' style={{display: "none"}}/><Tag title="Quality issue because of element in the recording not working" key="16"/></label>
                            <label><Field type='checkbox' name='problem' value='Quality issue due to system hang during call' style={{display: "none"}}/><Tag title="Quality issue due to system hang during call" key="17"/></label>
                        </Stack>
                        <h4>Should the video be sent for review?</h4>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <label><Field type='radio' name='review' value='To review' style={{display: "none"}}/><Tag title="To review" key="18"/></label>
                            <label><Field type='radio' name='review' value='Not to review' style={{display: "none"}}/><Tag title="Not to review" key="19"/></label>
                        </Stack>
                        <h4>Reasons for review</h4>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <label><Field type='checkbox' name='reason' value='Review because of personal information in the video' style={{display: "none"}}/><Tag title="Review because of personal information in the video" key="20"/></label>
                            <label><Field type='checkbox' name='reason' value='Review to delete because it doesn´t contain releveant information' style={{display: "none"}}/><Tag title="Review to delete because it doesn´t contain releveant information" key="21"/></label>
                        </Stack>
                        <br/>
                        <div className="buttonTicket">
                            <Button type="submit" variant="contained">Close ticket</Button>
                        </div>
                        <br/><br/>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

export default Survey;
