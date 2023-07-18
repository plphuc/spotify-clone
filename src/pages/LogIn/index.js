import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import Button from "~/components/Button";
import { BlindIcon, EyeIcon } from "~/components/Icons";
import SwitchButton from "~/components/SwitchButton";
import Validator from "~/utils/validator";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const titleLogins = [
    {
        title: "Continue With Google",
        nameIcon: "google-icon",
    },
    {
        title: "Continue With Facebook",
        nameIcon: "fb-icon",
    },
    {
        title: "Continue With Apple",
        nameIcon: "apple-icon",
    },
    {
        title: "Continue With Phone Number",
        nameIcon: null,
    },
];

export default function LogIn() {
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false)

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

        // Handle onChange action
        function handleOnChange(e, setValue) {
            setValue(e.target.value)
        }
    useEffect(() => {
        Validator({
            form: "#login-form",
            parentSelector: `${cx("form-group")}`,
            invalidSelector: `${cx('form-invalid')}`,
            rules: [
                Validator.isRequired('#username', 'Please enter your Spotify username or email address'),
                Validator.isRequired('#password', 'Please enter your password')
            ]
        })
    })
    return (
        <div className={cx("wrapper")}>
            <div className={cx('container')}>
                <h1 className={cx("title")}>Log in to Spotify</h1>
                <ul className={cx("login-section")}>
                    {titleLogins.map((titleLogin, idx) => (
                        <li key={idx} className={cx("login-opt")}>
                            <Button
                                outline
                                inheritColor
                                leftIcon={
                                    <span
                                        className={cx(
                                            "logo-24",
                                            titleLogin.nameIcon
                                        )}
                                    ></span>
                                }
                                className={cx("login-opt-btn")}
                                titleClassName={cx("title-btn")}
                            >
                                {titleLogin.title}
                            </Button>
                        </li>
                    ))}
                </ul>
    
                <hr/>
    
                <form id="login-form" className={cx("login-section")}>
                    <div className={cx("form-group")}>
                        <div className={cx("title-input")}>
                            <label htmlFor="login-username">
                                <span>Email or username</span>
                            </label>
                        </div>
                        <input
                            id="username"
                            type="text"
                            className={cx("input-section")}
                            placeholder="Email or username"
                        />
                    <div className={cx('form-invalid')}></div>
                    </div>
    
                    <div className={cx("form-group")}>
                        <div className={cx("title-input")}>
                            <label htmlFor="password">
                                <span>Password</span>
                            </label>
                        </div>
                        <div className={cx("input-password")}>

                            <input
                                type="password"
                                id="password"
                                className={cx("input-section")}
                                value={password}
                                onChange={(e) => handleOnChange(e, setPassword)}

                                placeholder="Password"
                            />
                            <div className={cx("eye-btn")} onClick={handleShowPw}>
                                {showPw ? <EyeIcon /> : <BlindIcon/>}
                            </div>
                        </div>
                    <div className={cx('form-invalid')}></div>
                    </div>
    
                    <div className={cx("remember-opt")}>
                        <SwitchButton title="Remember me"/>
                    </div>
                    <div className={cx("login-btn-wrapper")}>
                        <Button children="Log in" className={cx('login-btn')}/>
                    </div>
                    <div className={cx('forgot-opt-wrapper')}><a className={cx("forgot-opt")} href='/'>Forgot your password?</a></div>
                </form>

                <hr/>

                <div className={cx('signup-section')}>
                    <h2>
                        <span>Don't have an account?</span>
                        <a href="/">Sign up for Spotify</a>
                    </h2>
                </div>
        </div>
    </div>
    );
}
