import InvalidForm from "./components/InvalidForm"
import ReactDOMServer  from 'react-dom/server'

function getParent(inputSelector, parentSelector, formElement) {
    let inputElement = formElement.querySelector(inputSelector)
    while(inputElement.parentElement) {
        let parentClass = inputElement.parentElement.className
        if (parentClass.includes(parentSelector)) {
            return inputElement.parentElement
        }
        inputElement = inputElement.parentElement
    }

}

export default function Validator(options) {
    const rules = options.rules
    const form = options.form
    const parentSelector = options.parentSelector
    const invalidSelector = options.invalidSelector
    const formElement = document.querySelector(form)

    // contain test function of each rule
    const rulesBySelector = {}
    
    
    rules.forEach((rule) => {

        if (!Array.isArray(rulesBySelector[rule.selector])) {
            rulesBySelector[rule.selector] =  []
        }
        rulesBySelector[rule.selector].push(rule.test)
        
        const inputElements = formElement.querySelectorAll(rule.selector)
        const parentElement = getParent(rule.selector, parentSelector, formElement)

        inputElements.forEach(function(inputElement) {
            // Handle on blur
            inputElement.onblur = function () {
                let isValid = validate(inputElement, rule, parentElement)
                if (isValid) {handleValid(rule, parentElement)}
            }
            // Handle on input
            inputElement.oninput = function() {
                let isValid = validate(inputElement, rule, parentElement)
                if (isValid) {handleValid(rule, parentElement)}
            }
        })
    })

    formElement.onsubmit = function(e) {
        e.preventDefault()
        let isValid=true
        rules.forEach(function(rule) {
            const inputElement = formElement.querySelector(rule.selector)
            const parentElement = getParent(rule.selector, parentSelector, formElement)
            if (!validate(inputElement, rule, parentElement)) {
                isValid=false
                console.log('Invalid submition');
            }
        })

        if (isValid) {

        }
    }

    function validate(inputElement, rule, parentElement) {
        let errorMessage
        for (var ruleTest of rulesBySelector[rule.selector]) {
            switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    const choices = formElement.querySelectorAll(rule.selector)
                    let notChosen = true

                    for (let choice of choices) {
                        // value.checked ? undefined : message      
                        if (!ruleTest(choice)) {
                            notChosen = false
                        }
                    }
                    if (notChosen) {
                        errorMessage = rule.message
                    }
                    break
                default:
                    errorMessage = ruleTest(inputElement.value)
            }

            if (errorMessage) {
                let renderComponent = ReactDOMServer.renderToString(<InvalidForm content={errorMessage}/>)
                let existMessages = parentElement.querySelector(`div[class*='${invalidSelector}']`).innerHTML
                if (!existMessages.includes(renderComponent)) {
                    parentElement.querySelector(`div[class*='${invalidSelector}']`).innerHTML += renderComponent
                    parentElement.querySelector(`${rule.selector}`).style.boxShadow = 'inset 0 0 0 1px var(--text-negative)'
                }
                break                                                                                       
            }
        }
        return !errorMessage
    }

    function handleValid(rule, parentElement) {
        const invalidForm = parentElement.querySelector(`div[class*='${invalidSelector}']`)
        const existMessages = invalidForm.querySelectorAll(`div[class*='wrapper']`)
        
        existMessages.forEach(function(existMessage) {
            if(existMessage.innerText === rule.message) {
                existMessage.remove()
            }
        })
        parentElement.querySelector(`${rule.selector}`).removeAttribute("style")
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector,
        message,
        test: function(value) {
            const inputElement = document.querySelector(selector)
            if (inputElement.tagName==='SELECT') {
                return inputElement.value === 'Month' ? message : undefined
                // console.log(inputElement.value); --> 8
                // console.log(inputElement.options[inputElement.selectedIndex].text); --> August
            }
            if (inputElement.type === 'radio' || inputElement.type === 'checkbox') {
                return value.checked ? undefined : message            
            }
            return value.trim() ? undefined : message
        }
    }
}

Validator.checkEmail = function(selector, message) {
    return {
        selector,
        message,
        test: function(value) {
            const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return emailFormat.test(value) ? undefined : message
        }
    }
}