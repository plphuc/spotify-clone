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
        rulesBySelector[rule.selector].push(rule)
    })

    for (let selector in rulesBySelector) {
        const inputElements = formElement.querySelectorAll(selector)

        inputElements.forEach(function(inputElement) {
            // Handle on blur
            inputElement.onblur = function () {
                // When inputElement is changed, check all rules again
                checkRules(inputElement, selector)
            }
            // // Handle on input
            inputElement.oninput = function() {
                // When inputElement is changed, check all rules again
                checkRules(inputElement, selector)
            }
        })
    }
    formElement.onsubmit = function(e) {
        e.preventDefault()
        for (let selector in rulesBySelector) {
            const inputElement = formElement.querySelector(selector)
            checkRules(inputElement, selector)
        }
    }

    // validate should only check 1 rule
    // inputElement must have to handle checkbox, radio
    function validate(inputElement, rule) {
        const ruleTest = rule.test
        let errorMessage
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
                    errorMessage = [rule.message]
                }
                break
            default:
                errorMessage = ruleTest(inputElement.value)
        }
        return errorMessage
    }

    function checkRules(inputElement, selector) {
        const parentElement = getParent(selector, parentSelector, formElement)
        let invalidForm = parentElement.querySelector(`div[class*='${invalidSelector}']`)
        
        let isValid = true
        invalidForm.innerHTML = ''
        for (let rule of rulesBySelector[selector]){
            // Validate only check 1 rule
            // Validate returns errorMessages --> undefined = valid; else --> array = invalid
            let messages = validate(inputElement, rule)
            if (messages) {
                isValid = false

                // Show error messages
                messages.forEach(function(message) {
                    let renderComponent = ReactDOMServer.renderToString(<InvalidForm content={message}/>)
                    invalidForm.innerHTML += renderComponent
                })
                break
            }
        }
        if (isValid) {
            parentElement.querySelector(`${selector}`).style.boxShadow = 'inset 0 0 0 1px var(--essential-subdued)'
        }
        else {
            parentElement.querySelector(`${selector}`).style.boxShadow = 'inset 0 0 0 1px var(--text-negative)'
        }
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector,
        message,
        test: function(value) {
            const inputElement = document.querySelector(selector)
            if (inputElement.tagName==='SELECT') {
                return inputElement.value === 'Month' ? [message] : undefined
                // console.log(inputElement.value); --> 8
                // console.log(inputElement.options[inputElement.selectedIndex].text); --> August
            }
            if (inputElement.type === 'radio' || inputElement.type === 'checkbox') {
                return value.checked ? undefined : [message]            
            }
            return value.trim() ? undefined : [message]
        }
    }
}

Validator.checkEmail = function(selector, message) {
    return {
        selector,
        message,
        test: function(value) {
            const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return emailFormat.test(value) ? undefined : [message]
        }
    }
}