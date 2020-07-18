/*
Author: Enrique Decoss

@package: page-object
E2E Test for Configuring Onboarding, Offboarding and Teams
*/
require('dotenv').config()
import LoginAction from '../page-object/Login-BasicAuth-page'
import NavBarAction from '../page-object/Nav-Bar-page'
import OnoffBoarding from '../page-object/On-offBoarding-page'
import config from './config.json'
const dataSet = require('./data.json')

fixture ` Config On & Offboarding - feature`
.page`${config.baseURL}`
.beforeEach( async t => {
    //Login
    await LoginAction.loginform(process.env.USERNAME, process.env.PASSWORD)
    t.ctx.gen = 20000
})

dataSet.forEach(data => {
test(`Should validate Configuring Onboarding with '${data.item}'`, async t => {

    //Assertion
    await t.expect(NavBarAction.settingsIcon.exists).ok( {timeout: t.ctx.gen} )
    // Navigate 
    await NavBarAction.navigateToIcons("settings")
    await t.click(NavBarAction.on_offBoarding)
    // Choose Options on, off, group
    await OnoffBoarding.goToSteps("on")
    //Add Name of the step
    await OnoffBoarding.goToAddStep(data.name, "step")
    //text, download, employee-attribute, profile-picture, checkbox, enter-text, enter-url, upload
    await OnoffBoarding.goToAddItem(data.item)
    //Assertion
    await t.expect(OnoffBoarding.saveChg.exists).ok( {timeout: t.ctx.gen} )

})
.after (async t => {
    await OnoffBoarding.deleteOption()
})
})

dataSet.forEach(data => {
test(`Should validate Configuring Offboarding with '${data.item}'`, async t => {

    //Assertion
    await t.expect(NavBarAction.settingsIcon.exists).ok( {timeout: t.ctx.gen} )
    // Navigate 
    await NavBarAction.navigateToIcons("settings")
    await t.click(NavBarAction.on_offBoarding)
    // Choose Options on, off, group & step or team
    await OnoffBoarding.goToSteps("off")
    //Add Name of the step
    await OnoffBoarding.goToAddStep(data.name, "step")
    //text, download, employee-attribute, profile-picture, checkbox, enter-text, enter-url, upload
    await OnoffBoarding.goToAddItem(data.item)
    //Assertion
    await t.expect(OnoffBoarding.saveChg.exists).ok( {timeout: t.ctx.gen} )

})
.after (async t => {
    await OnoffBoarding.deleteOption()
})
})

test("Should validate Configuring Groups", async t => {

    //Assertion
    await t.expect(NavBarAction.settingsIcon.exists).ok( {timeout: t.ctx.gen} )
    // Navigate 
    await NavBarAction.navigateToIcons("settings")
    await t.click(NavBarAction.on_offBoarding)
    // Choose Options on, off, group
    await OnoffBoarding.goToSteps("group")
    //Add Name of the step
    await OnoffBoarding.goToAddStep("test", "team")
    //Assertion
    await t.expect(OnoffBoarding.delGroups.exists).ok( {timeout: t.ctx.gen} )

})
.after (async t => {
    await OnoffBoarding.deleteGroup()
})