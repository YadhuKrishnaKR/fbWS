import React from 'react'

function login() {
    return (
        <div>
            <div id="wrapper">

                <div id="div1">

                </div>

                <div id="div2">
                    <h1>Create an account</h1>

                    <p>It's free and always will be.</p>
                    <li><input type="text" placeholder="First Name" id="Firstname" />
                        <input type="text" placeholder="Surname" id="surname" />

                    </li>
                    <li><input type="text" placeholder="Mobile number or email" /></li>
                    <li><input type="password" placeholder="New password" /></li>

                    <p>Birthday</p>

                    <li>
                        <select><option>Day</option></select>
                        <select><option>Month</option></select>
                        <select><option>Year</option></select>
                        <a href="">Why do I need to provide my date of birth?</a>
                    </li>

                    <li><input type="radio" />Female <input type="radio" />Male</li>
                    <li id="terms">By clicking Create an account, you agree to our <a href="">Terms</a> and that <br />you have read our <a href="">Data Policy</a>, including our <a href="">Cookie Use</a>.</li>
                    <li><input type="submit" value="Create an account" /></li>
                    <li id="create_page"><a href="">Create a Page</a> for a celebrity, band or business.</li>
                </div>

            </div>
        </div>
    )
}

export default login
