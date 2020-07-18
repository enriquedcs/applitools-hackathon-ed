/*
Author: Enrique Decoss

@package: page-object
All elements and methods for Login page
*/

import { Selector, t } from 'testcafe'

class LoginAction {
    constructor() {
        //GoogleAuth
        this.googleSign = Selector(`[alt='Google login']`)
        this.userName = Selector('#identifierId')
        this.nextButton = Selector('#identifierNext')
        this.password = Selector('#password')
        this.nextPassword = Selector('#passwordNext')
        //Regular Auth
        this.regUser = Selector('#email')
        this.regPass = Selector('#password')
        this.loginBtn = Selector('button')
        //Assertion
    }
    //Google Auth
    async loginformGoogle(username, password){
        await t.click(this.googleSign)
        await t.click(this.userName)
                .typeText(this.userName, username, {paste:true})
                .click(this.nextButton)
        await t.click(this.password)
                .typeText(this.password, password, {paste:true})
                .click(this.nextPassword)
        
    }
    async loginform(username, password){
        await t.click(this.regUser)
                .typeText(this.regUser, username, {paste:true})
        await t.click(this.regPass)
                .typeText(this.regPass, password, {paste:true})
                .click(this.loginBtn)     
    }

}

export default new LoginAction