describe('Verify create regular appointment successfully', async () => {
    it ('should validate page title', async ()=>{
        await browser.url("https://internship-qa-2.cybozu-dev.com/g/")
        const locatorOfLoginPage = {
            usernameInputField: '//*[@id="username-:0-text"]',
            passwordInputField: '//*[@id="password-:1-text"]',
            loginButton: '.login-button'
        }
        const account = {
            username: 'cybozu',
            password: 'cybozu'
        }
        const usernameField = await $(locatorOfLoginPage.usernameInputField)
            const passwordField = await $(locatorOfLoginPage.passwordInputField)
            const loginButton = await $(locatorOfLoginPage.loginButton)
            const garoonBtn = await $('a[href="/g/"]')
            const appointment = {
                title: 'This is WDIO testing',
                start_day_value: 30,
                end_day_value: 30
            }
            const createdIcon = await $('//*[@id="gw_1_cal_tbody"]/tr[2]/td[2]/div[1]/a')
            const appointmentKind = await $('//*[@id="schedule/add"]/div[1]/span[2]')
            const subjectTiltle = await $('[title="Appointment title"]')
            const addBtn = await $('//*[@id="schedule_submit_button"]/a')
            const deleteAppointmentBtn = await $('//*[@id="main_menu_part"]/div[1]/span[2]/span/a')
            const confirmDelAppointmentBtn = await $('//*[@id="schedule_button_save"]/a')
            const portletFilterList = await $('//*[@id="title"]')


            await usernameField.setValue(account.username)
            await passwordField.setValue(account.password)
            await loginButton.click()

            await garoonBtn.click()

            

            await expect(createdIcon).toBeDisplayed()
            await expect(createdIcon).toBeClickable()
            await createdIcon.click()

            await expect(appointmentKind).toHaveAttribute('class','tab_on')
            await $(`//*[@id="start_day"]/option[${appointment.start_day_value}]`).click()
            await expect($(`//*[@id="start_day"]/option[${appointment.start_day_value}]`)).toBeSelected()
            
                
            await $(`//*[@id="start_day"]/option[${appointment.end_day_value}]`).click()
            await expect($(`//*[@id="start_day"]/option[${appointment.end_day_value}]`)).toBeSelected()

            await subjectTiltle.addValue(appointment.title)
            await expect(subjectTiltle).toHaveValue(appointment.title)

            await expect(addBtn).toBeDisplayed()
            await expect(addBtn).toBeClickable()
            await addBtn.click()

            await expect($('.schedule_text_noticeable_grn')).toHaveTextContaining(`${appointment.start_day_value}`)
            await expect($(`h2=${appointment.title}`)).toHaveText(appointment.title)

            await expect(deleteAppointmentBtn).toBeDisplayed()
            await expect(deleteAppointmentBtn).toBeClickable()
            await deleteAppointmentBtn.click()
            await browser.waitUntil(async()=> (
                await confirmDelAppointmentBtn.isDisplayed() === true,
                await confirmDelAppointmentBtn.isClickable() === true
            ),5000)
            await confirmDelAppointmentBtn.click()
            await expect(portletFilterList).toBeDisplayed()
            await portletFilterList.click()
            await expect($('td=(Recently selected users)')).toBeClickable()
            $('td=(Recently selected users)').click()
            await expect($(`//*[text()='${appointment.title}']`)).not.toBePresent()
    })
})