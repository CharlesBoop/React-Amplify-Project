import React, { useEffect, useState} from "react";
import '../CSS/CallProgress.css'
import Nav2 from '../Components/Nav2'
import ProgressCard from "../Components/ProgressCard";
import { useReactMediaRecorder } from "react-media-recorder";
import { useNavigate } from 'react-router-dom';


function CallProgress(
    props,
    {
        screen,
        audio,
        video,
        downloadRecordingPath,
        downloadRecordingType
    }){
    
        const [recordingNumber, setRecordingNumber] = useState(0)

        const RecordView = () => {
            useEffect(() => {
                startRecording();
            }, []);

            const {
                startRecording: startRecord,
                stopRecording: stopRecord,
                mediaBlobUrl
            } = useReactMediaRecorder({ screen: true, audio: true, video })
    
            const startRecording = () => {
                return startRecord()
            }
    
            const navigate = useNavigate();
            const stopRecording = () => {
                const currentTimeStamp = new Date().getTime()
                setRecordingNumber(currentTimeStamp)
                stopRecord()
                alert("Stopped recording")
                saveRecording()
                navigate("/survey");
            }

            // Para guardar un video en s3
            const saveRecording = () => {
                const now = Date()
                // Se crea una instancia de AWS S3
                /*
                let s3 = new AWS.S3({
                    params: { 
                        Bucket: 'videos' 
                    }
                });
                */
               // Se guarda el video en el bucket de s3 con el nombre que se desea, en este caso se guarda en el path videos/{agent.id}/{nombreVideo}
                const saveInS3 = {
                    Key: `${props.id}/${props.id}-${now.toString()}.mp4`,
                    Body: mediaBlobUrl,
                    'ContentType': 'video/mp4',
                    ACL: 'public-read'
                    }
                console.log("Saved in s3 \n", saveInS3)
                return true
            }

            return(
                <div>
                    <Nav2 title="Call in Progress" name={props.name} id={props.id} actionName={stopRecording} content={
                    <div>
                        <img src="https://i0.wp.com/aprendiendoavirtualizar.com/wp-content/uploads/2018/12/aws-logs-screenshot003.png?ssl=1"/>
                    </div>
                }/>

                </div>

            );
        }
        return(
            <div className="Wrapper-Grabar-Pantalla">
                {RecordView()}
            </div>
        )
    }

export default CallProgress;
