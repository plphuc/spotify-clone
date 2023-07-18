import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "~/config";
import styles from "./Signup.module.scss";
import Validator from "~/utils/validator";
import {
    BlindIcon,
    DownArrowIcon,
    EyeIcon,
    FbWhiteIcon,
    GoogleIcon,
    LogoIcon,
} from "~/components/Icons";
import Button from "~/components/Button";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const genders = ["Male", "Female", "Non-binary", "Other", "Prefer not to say"];

export default function Signup() {
    
    const [showPw, setShowPw] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    
    
        // Handle on change value input
        function handleOnChange(e, setValue) {
            setValue(e.target.value);
        }
    
        // Handle show/hide password
        function handleShowPw() {
            const inputElement = document.querySelector('#password')
            if (inputElement.type === 'password') {
                inputElement.type = 'text'
                setShowPw(true)
            }
            else {
                inputElement.type = 'password'
                setShowPw(false)
            }
        }
    useEffect(() => {
        Validator({
            form: "#signup-form",
            parentSelector: `${cx("form-group")}`,
            invalidSelector: `${cx('form-invalid')}`,
            rules: [
            Validator.isRequired("#email", "You need to enter your email"), 
            Validator.checkEmail('#email', "This email is invalid. Make sure it is written like example@email.com"),
            Validator.isRequired("#password", "You need to enter your password"),
            // Validator.checkPassword("#password"),
            Validator.isRequired("#displayname", "You need to enter your username"),
            Validator.isRequired("#day", "Enter a valid day of the month"),
            Validator.isRequired('#month', 'Select your birth month'),
            Validator.isRequired("#year", "Enter a valid year"),
            Validator.isRequired('input[name="gender"]', "Select your gender")
        ],
        })});

    return (
        <div className={cx("wrapper")}>
            <form id="signup-form" className={cx("container")}>
                <div className={cx("logo-container")}>
                    <Link to={config.routes.home} className={cx("logo")}>
                        <LogoIcon />
                    </Link>
                    <h2>Sign up for free to start listening.</h2>
                </div>

                <div className={cx("signup-btn-wrapper")}>
                    <Button
                        leftIcon={
                            <span className={cx("signup-logo")}>
                                <FbWhiteIcon />
                            </span>
                        }
                        className={cx("signup-opt-btn", "fb-btn")}
                    >
                        <span className={cx("title-btn", "fb-title")}>
                            Sign up with Facebook
                        </span>
                    </Button>
                </div>

                <div className={cx("signup-btn-wrapper")}>
                    <Button
                        outline
                        inheritColor
                        leftIcon={
                            <span className={cx("signup-logo")}>
                                <GoogleIcon />
                            </span>
                        }
                        className={cx("signup-opt-btn", "google-btn")}
                    >
                        <span className={cx("title-btn")}>
                            Sign up with Google
                        </span>
                    </Button>
                </div>

                <span className={cx("spacer")}>or</span>

                <div className={cx("form-group")}>
                    <label htmlFor="email" className={cx("form-title")}>
                        What's your email?
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email."
                        value={email}
                        onChange={(e) => handleOnChange(e, setEmail)}
                        className={cx('input-item')}
                    />
                    <div className={cx('form-invalid')}></div>
                    <a href="/" className={cx('phone-opt')}>Use phone number instead</a>
                </div>

                <div className={cx("form-group", "pw-wrapper")}>
                    <label htmlFor="password" className={cx("form-title")}>
                        Create a password
                    </label>

                    <div className={cx('pw-container')}>
                        <input
                            type="password"
                            id="password"
                            placeholder="Create a password."
                            value={password}
                            onChange={(e) => handleOnChange(e, setPassword)}
                            className={cx('input-item')}
                        />
                        <div className={cx('eye-pw')} onClick={handleShowPw}>
                            {showPw ? <EyeIcon/> : <BlindIcon/>}
                        </div>
                    </div>

                    <div className={cx('form-invalid')}></div>
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="displayname" className={cx("form-title")}>
                        What should we call you?
                    </label>
                    <input
                        type="text"
                        id="displayname"
                        placeholder="Enter a profile name."
                        value={username}
                        onChange={(e) => handleOnChange(e, setUsername)}
                        className={cx('input-item')}
                    />
                    <span className={cx("form-desc")}>
                        This appears on your profile.
                    </span>
                    <div className={cx('form-invalid')}></div>
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="birthday" className={cx("form-title")}>
                        What's your date of birth?
                    </label>
                    <div className={cx("birthday-form")}>
                        <div className={cx("birthday-info")}>
                            <label htmlFor="day">Day</label>
                            <input
                                type="text"
                                id="day"
                                placeholder="DD"
                                value={day}
                                onChange={(e) => handleOnChange(e, setDay)}
                            className={cx('input-item')}
                            />
                        </div>

                        <div className={cx("birthday-info")}>
                            <label htmlFor="month">Month</label>
                            <div className={cx("month-info")}>
                                <select
                                    id="month"
                                    placeholder="MM"
                                    defaultValue="Month"
                                >
                                    <option disabled>Month</option>
                                    {monthNames.map((month, idx) => (
                                        <option
                                            key={"month_" + idx}
                                            value={idx + 1}
                                        >
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <DownArrowIcon
                                    className={cx("down-arrow-icon")}
                                />
                            </div>
                        </div>

                        <div className={cx("birthday-info")}>
                            <label htmlFor="year">Year</label>
                            <input
                                type="text"
                                id="year"
                                placeholder="YYYY"
                                value={year}
                                onChange={(e) => handleOnChange(e, setYear)}
                            className={cx('input-item')}
                            />
                        </div>
                    </div>
                    <div className={cx('form-invalid')}></div>
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="gender" className={cx("form-title")}>
                        What's your gender?
                    </label>

                    <div className={cx("gender-container")}>
                        {genders.map((gender, idx) => (
                            <div className={cx("gender-info")} key={idx}>
                                <input
                                    className={cx("radio-input")}
                                    type="radio"
                                    id={gender}
                                    name="gender"
                                    value={gender}
                                />

                                <label
                                    htmlFor={gender}
                                    className={cx("radio-label")}
                                >
                                    <span className={cx("button-radio")}></span>
                                    <span className={cx("gender-title")}>
                                        {gender}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className={cx('form-invalid')}></div>
                </div>

                <div className={cx("agreement")}>
                    <div className={cx("agree-item")}>
                        <input
                            type="checkbox"
                            id="marketing-noti"
                            className={cx("input-agree")}
                        />
                        <label
                            htmlFor="marketing-noti"
                            className={cx("label-agree")}
                        >
                            <span className={cx("checkbox")}></span>
                            <span className={cx("agree-content")}>
                                {" "}
                                I would prefer not to receive marketing messages
                                from Spotify
                            </span>
                        </label>
                    </div>

                    <div className={cx("agree-item")}>
                        <input
                            type="checkbox"
                            id="share-data"
                            className={cx("input-agree")}
                        />
                        <label
                            htmlFor="share-data"
                            className={cx("label-agree")}
                        >
                            <span className={cx("checkbox")}></span>
                            <span className={cx("agree-content")}>
                                Share my registration data with Spotify's
                                content providers for marketing purposes.
                            </span>
                        </label>
                    </div>
                </div>
                <p className={cx("note-item")}>
                    <span>
                        By clicking on sign-up, you agree to Spotify's&nbsp;
                        <a href="/">Terms and Conditions of Use</a>.
                    </span>
                </p>

                <p className={cx("note-item")}>
                    <span>
                        To learn more about how Spotify collects, uses, shares
                        and protects your personal data, please see&nbsp;
                        <a href="/">Spotify's Privacy Policy</a>.
                    </span>
                </p>

                <div className={cx("signup-btn-wrapper")}>
                    <Button className={cx("signup-btn")}>Sign up</Button>
                </div>

                <span className={cx("login-opt")}>
                    <p>Have an account?&nbsp;</p>
                    <a href="/">Log in</a>.
                </span>
            </form>
        </div>
    );
}
