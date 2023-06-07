import classNames from "classnames/bind";

import styles from "./Login.module.scss";
import Button from "~/components/Button";
import { EyeIcon } from "~/components/Icons";
import SwitchButton from "~/components/SwitchButton";

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
    
                <div className={cx("login-section")}>
                    <div className={cx("info-group")}>
                        <div className={cx("title-input")}>
                            <label htmlFor="login-username">
                                <span>Email or username</span>
                            </label>
                        </div>
                        <input
                            id="login-username"
                            type="text"
                            className={cx("input-section")}
                            placeholder="Email or username"
                        />
                    </div>
    
                    <div className={cx("info-group")}>
                        <div className={cx("title-input")}>
                            <label htmlFor="login-username">
                                <span>Password</span>
                            </label>
                        </div>
                        <div className={cx("input-password")}>
                            <input
                                id="login-username"
                                className={cx("input-section")}
                                type="text"
                                placeholder="Password"
                            />
                            <div className={cx("eye-btn")}>
                                <EyeIcon />
                            </div>
                        </div>
                    </div>
    
                    <div className={cx("remember-opt")}>
                        <SwitchButton title="Remember me"/>
                    </div>
                    <div className={cx("login-btn-wrapper")}>
                        <Button children="Log in" className={cx('login-btn')}/>
                    </div>
                    <div className={cx('forgot-opt-wrapper')}><a className={cx("forgot-opt")} href='/'>Forgot your password?</a></div>
                </div>

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
