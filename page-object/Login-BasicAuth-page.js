/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Login page
*/

import { Selector, t } from 'testcafe'

class LoginAction {
    constructor() {
        this.googleSign = Selector(`[alt='Google login']`)
        this.userName = Selector('#identifierId')
        this.nextButton = Selector('#identifierNext')
        this.password = Selector('#password')
        this.nextPassword = Selector('#passwordNext')
        //Assertion
    }

    async loginform(username, password){
        await t.click(this.googleSign)
        await t.click(this.userName)
                .typeText(this.userName, username, {paste:true})
                .click(this.nextButton)
        await t.click(this.password)
                .typeText(this.password, password, {paste:true})
                .click(this.nextPassword)
        
    }

}

export default new LoginAction