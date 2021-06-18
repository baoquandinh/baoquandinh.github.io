import { BaseSyntheticEvent, Component, Fragment, SyntheticEvent } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, FormControl, InputLabel, FormHelperText, Input, Button } from "@material-ui/core";
import { TransferWithinAStationSharp } from '@material-ui/icons';


interface IProp { }
interface IState {
    [key: string]: number | string | boolean
    email: string;
    message: string;
    fullName: string;
    fullNameError: boolean;
    emailError: boolean;
    messageError: boolean;

}

interface IFormInfo {
    id: string;
    name: string;
    htmlName: string;
}

export class ContactMeForm extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            message: '',
            fullNameError: false,
            emailError: false,
            messageError: false
        }
        this.sendEmail = this.sendEmail.bind(this)
        this.clearFormData = this.clearFormData.bind(this)
        this.validateInput = this.validateInput.bind(this)
    }

    inputFields = [{
        id: 'fullName',
        name: 'Name',
        htmlName: 'full-name-input',
        value: '',
    },
    {
        id: 'email',
        name: 'Email',
        htmlName: 'email-input',
        value: '',
    },
    {
        id: 'message',
        name: 'Message',
        htmlName: 'message-input',
        value: '',
    }]

    validateInput = (key: string): boolean => {
        // this.setState((state) => ({
        //     ...state,
        //     [`${key}Error`]: state[key] == '' ? true : false
        // }))
        const hasError = this.state[`${key}Error`]
        if (hasError) {
            return hasError == true ? true : false
        }
        return false
    }

    clearFormData = () => {
        this.setState({
            fullName: '',
            email: '',
            message: '',
            fullNameError: false,
            emailError: false,
            messageError: false
        })
    }

    sendEmail = (e: SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const { fullName, email, message, fullNameError } = this.state
        if (fullName == '' || email == '' || message == '') {
            return;
        }
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
    handleChange = (e: BaseSyntheticEvent) => {
        this.setState(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    render() {
        return <Grid container spacing={1} justify="center" data-aos="fade-in" data-aos-duration="1000">
            {this.inputFields.map(inputField => {
                return <Grid item key={`${inputField.id}GridItem`} xs={12}>
                    <FormControl variant="filled" error={false} required style={{ width: "75%", paddingTop: "7px", paddingBottom: "7px" }}>
                        <InputLabel htmlFor={inputField.htmlName}>{inputField.name}</InputLabel>
                        <Input id={`${inputField.id}Input`} name={inputField.id} aria-describedby={`${inputField.htmlName}-field`} value={this.state[inputField.id]} onChange={this.handleChange} onBlur={() => this.validateInput(`${inputField.id}`)} />
                    </FormControl>
                </Grid>
            })}
            {/* <Grid item xs={12} style={{ paddingTop: "40px" }}>
                <FormControl id="full-name-input-form" error={this.state.fullNameError} variant="filled" required style={{ width: "75%" }}>
                    <InputLabel htmlFor="full-name-input">Name</InputLabel>
                    <Input id="full-name-input" name="fullName" aria-describedby="full-name-input-field" value={this.state.fullName} onChange={this.handleChange} onBlur={() => this.validateInput('fullName')}/>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl variant="filled" required style={{ width: "75%" }}>
                    <InputLabel htmlFor="email-input">Email</InputLabel>
                    <Input id="email-input" name="email" aria-describedby="email-address-input-field-helper-text" value={this.state.email} onChange={this.handleChange} />
                    <FormHelperText id="email-address-input-field-helper-text">I'll never share your email with anyone so don't worry!</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl required variant="filled" style={{ width: "75%" }}>
                    <InputLabel htmlFor="message-input">Message</InputLabel>
                    <Input id="message-input" name="message" required multiline rows="6" value={this.state.message} onChange={this.handleChange} />
                </FormControl>
            </Grid>
            <Grid item style={{ paddingTop: "35px", paddingBottom: "35px" }}>
                <Button size="large" variant="contained" color="primary" onClick={this.sendEmail}>SEND</Button>
            </Grid> */}
        </Grid>
    }
}