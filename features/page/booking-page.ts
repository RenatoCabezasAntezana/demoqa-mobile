class BookingPage {
    /**
     * define selectors using getter methods
     */
    public get buttonCloseRegister () {
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }

    public get inputDestination() {
        return $('//android.widget.TextView[@resource-id="com.booking:id/facet_search_box_basic_field_label" and @text="Enter your destination"]');
    }
    public get inputDestination2(){
        return $('//android.widget.EditText[@resource-id="com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"]')
    }

    public get noNotifications () {
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickButtonCloseRegister () {
        await this.noNotifications.click();
        await this.buttonCloseRegister.click();
    }

    public async enterDestination(destiny:string) {
        await this.inputDestination.click()
        await this.inputDestination2.setValue(destiny);
    }

}

export default new BookingPage();