import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "~/config";
import styles from "./Signup.module.scss";
import {
    DownArrowIcon,
    FbWhiteIcon,
    GoogleIcon,
    LogoIcon,
} from "~/components/Icons";
import Button from "~/components/Button";
const cx = classNames.bind(styles);

const $ = document.querySelector.bind(document);

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
    const genderInfo = $(`.${cx("gender-info")}`);
    console.log(genderInfo);

    // genderInfo.onclick = function() {
    //     buttonRadio.style.background = "#169b45"
    // }
    return (
        <div className={cx("wrapper")}>
            <form className={cx("container")}>
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
                    />
                    <a href="/">Use phone number instead</a>
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="password" className={cx("form-title")}>
                        Create a password
                    </label>
                    <input
                        type="text"
                        id="password"
                        placeholder="Create a password."
                    />
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="displayname" className={cx("form-title")}>
                        What should we call you?
                    </label>
                    <input
                        type="text"
                        id="displayname"
                        placeholder="Enter a profile name."
                    />
                    <span className={cx("form-desc")}>
                        This appears on your profile.{" "}
                    </span>
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="birthday" className={cx("form-title")}>
                        What's your date of birth?
                    </label>
                    <div className={cx("birthday-form")}>
                        <div className={cx("birthday-info")}>
                            <label htmlFor="day">Day</label>
                            <input type="text" id="day" placeholder="DD" />
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
                                        <option key={idx} value={month}>
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
                            <input type="text" id="year" placeholder="YYYY" />
                        </div>
                    </div>
                </div>

                <div className={cx("form-group")}>
                    <label htmlFor="gender" className={cx("form-title")}>
                        What's your gender?
                    </label>

                    <div className={cx("gender-container")}>
                        {genders.map((gender, idx) => (
                            <div className={cx("gender-info")} key={idx}>
                                <input
                                    type="radio"
                                    id={gender}
                                    name="gender"
                                    value={gender}
                                />

                                <label htmlFor={gender}>
                                    <span className={cx("button-radio")}></span>
                                    <span className={cx("gender-title")}>
                                        {gender}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx("agreement")}>
                    <div className={cx("agree-item")}>
                        <input type="checkbox" id="marketing-noti" />
                        <label htmlFor="marketing-noti">
                            <span className={cx("checkbox")}></span>
                            <span className={cx("agree-content")}>
                                {" "}
                                I would prefer not to receive marketing messages
                                from Spotify
                            </span>
                        </label>
                    </div>

                    <div className={cx("agree-item")}>
                        <input type="checkbox" id="share-data" />
                        <label htmlFor="share-data">
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
                    <Button className={cx('signup-btn')}>Sign up</Button>
                </div>

                <span className={cx('login-opt')}>
                    <p>Have an account?&nbsp;</p>
                    <a href="/">Log in</a>
                    .
                </span>
            </form>
        </div>
    );
}
