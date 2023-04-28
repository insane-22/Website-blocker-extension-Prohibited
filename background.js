chrome.runtime.onInstalled.addListener((e) =>{
    if(e.reason === chrome.runtime.OnInstalledReason.INSTALL){
        chrome.storage.local.set({isOnboardingDone : false})

        chrome.runtime.setUninstallURL("http://www.quotesforthemind.com/wp-content/uploads/2013/12/Using-your-Time-Wisely-%E2%80%93-Use-your-Time-Effectively-You-have-86-000-seconds-in-a-day.-How-will-you-spend-it-Dont-waste-it-300x300.jpg")
        chrome.tabs.create({
            url: "test.html"
        })
    }
})

