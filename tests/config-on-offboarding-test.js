/*

*/

import LoginAction from '../page-object/Login-BasicAuth-page'
import NavBarAction from '../page-object/Nav-Bar-page'
import config from './config.json'

fixture ` Config On & Offboarding - feature`
.page`${config.baseURL}`
.beforeEach( async t => {
    //Login
    await LoginAction.loginform('enrique.decoss@gmail.com', "Zekix1883")
    t.ctx.gen = 20000
})

test("Should validate Configuring Onboarding and Offboarding", async t => {

    //Assertion
    await t.expect(NavBarAction.settingsIcon.exists).ok( {timeout: t.ctx.gen} )
    NavBarAction.settingsIcon

})
