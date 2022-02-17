import "./ContactForm.css";
import useInput from "../../Hooks/use-input";

// custom input hook provides cleaner input sections with onclick feedback for validity
const ContactForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasError: enteredSurnameHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: resetSurnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: enteredSubjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: enteredMessageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredSurnameIsValid &&
    enteredEmailIsValid &&
    enteredSubjectIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Do nothing is the form is not valid. This shouldnt happen anyway, form should not be submittable if not valid
    if (!formIsValid) {
      return;
    }

    // logic to process form information goes here. Create an object, post to database etc

    resetEmailInput();
    resetNameInput();
    resetSurnameInput();
    resetSubjectInput();
    resetMessageInput();
  };

  const nameInputClasses = enteredNameHasError
    ? "form-control invalid"
    : "form-control";

  const surnameInputClasses = enteredSurnameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailHasError
    ? "form-control invalid"
    : "form-control";

  const subjectInputClasses = enteredSubjectHasError
    ? "form-control invalid"
    : "form-control";

  const messageInputClasses = enteredMessageHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="contactForm">
        <div className="control-group">
          <div className={nameInputClasses}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {enteredNameHasError && (
              <p className="error-text">Name Must not be Empty</p>
            )}
          </div>
          <div className={surnameInputClasses}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              value={enteredSurname}
              onChange={surnameChangeHandler}
              onBlur={surnameBlurHandler}
            />
            {enteredSurnameHasError && (
              <p className="error-text">Last Name Must not be Empty</p>
            )}
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="name">E-Mail Address</label>
            <input
              type="text"
              id="name"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {enteredEmailHasError && (
              <p className="error-text">Email Must Be Valid</p>
            )}
          </div>
          <div className={subjectInputClasses}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={enteredSubject}
              onChange={subjectChangeHandler}
              onBlur={subjectBlurHandler}
            />
            {enteredSubjectHasError && (
              <p className="error-text">Subject Must Not be Empty</p>
            )}
          </div>
        </div>
        <div className="control-group">
          <div className={messageInputClasses}>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              value={enteredMessage}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              rows="14"
              cols="40"
            />
            {enteredMessageHasError && (
              <p className="error-text">Message Must Not be Empty</p>
            )}
          </div>
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
