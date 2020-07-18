/*

*/

import LoginAction from '../page-object/Login-BasicAuth-page'
import NavBarAction from '../page-object/Nav-Bar-page'
import OnoffBoarding from '../page-object/On-offBoarding-page'
import config from './config.json'

fixture ` Config On & Offboarding - feature`
.page`${config.baseURL}`
.beforeEach( async t => {
    //Login
    await LoginAction.loginform(`${config.username}`, `${config.password}`)
    t.ctx.gen = 20000
})

test("Should validate Configuring Onboarding and Offboarding", async t => {

    //Assertion
    await t.expect(NavBarAction.settingsIcon.exists).ok( {timeout: t.ctx.gen} )
    // Navigate 
    await NavBarAction.navigateToIcons("settings")
    await t.click(NavBarAction.on_offBoarding)
    // Choose Options on, off, group
    await OnoffBoarding.goToSteps("on")
    //Add Name of the step
    await OnoffBoarding.goToAddStep("test")
    //text, download, employee-attribute, profile-picture, checkbox, enter-text, enter-url, upload
    await OnoffBoarding.goToAddItem("download")
    //Assertion
    await t.expect(OnoffBoarding.saveChg.exists).ok( {timeout: t.ctx.gen} )

})
.after (async t => {
    await OnoffBoarding.deleteOption()
})
