import { BaseSyntheticEvent, Component, Fragment, SyntheticEvent } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';


interface IProp { }
interface IState {
    email: string;
    message: string;
    fullName: string;
    formValidated: boolean;
}

export class ContactMeForm extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            message: '',
            formValidated: false
        }
        this.sendEmail = this.sendEmail.bind(this)
        this.clearFormData = this.clearFormData.bind(this)
    }

    clearFormData = () => {
        this.setState({
            fullName: '',
            email: '',
            message: '',
            formValidated: false
        })
    }

    sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const { fullName, email, message } = this.state
        const form = e.currentTarget as HTMLSelectElement
        if (form.checkValidity() === true) {
            const templateParams = {
                name: fullName,
                message: message,
                email: email
            }
            emailjs.send('service_86dgq1p', 'template_7axkvtc', templateParams, 'user_UfC3xQimf9UCPJKwL75dC').then((response) => {
                console.log(response)
                this.clearFormData()
            }, (error) => {
                console.log(error)
            })
        }
        this.setState({ formValidated: true })

    }
    handleChange = (e: BaseSyntheticEvent) => {
        this.setState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    render() {
        return <Fragment>
            <Form noValidate validated={this.state.formValidated} onSubmit={this.sendEmail}>
                <Form.Row>
                    <Form.Group className="col-md-6">
                        <Form.Label className="float-left">Name</Form.Label>
                        <Form.Control required name='fullName' placeholder="Enter Name" value={this.state.fullName} onChange={this.handleChange}></Form.Control>
                        <Form.Control.Feedback type="valid">Nice first name</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">You are missing your first name</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-md-6">
                        <Form.Label className="float-left">Email</Form.Label>
                        <Form.Control required name='email' type="email" placeholder="Enter Email Address" value={this.state.email} onChange={this.handleChange}></Form.Control>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Invalid Email Address</Form.Control.Feedback>
                        <Form.Text className="text-muted">I'll never share your email with anyone so don't worry</Form.Text>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group className="col-md-12" controlId="formMessage">
                        <Form.Label className="float-left">Message</Form.Label>
                        <Form.Control required name='message' as="textarea" rows={4} placeholder="Looking forward to reading your message!" value={this.state.message} onChange={this.handleChange}></Form.Control>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please leave a message</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button style={{ borderRadius: '40px' }} type="submit" variant="primary" size="lg" >SEND</Button>
            </Form>
        </Fragment>
    }
}