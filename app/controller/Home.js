Ext.define('FlyDiscoveryAir.controller.Home', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainNavView: "main"
        },
        control: {
            "button[action=bookFlight]": {
                tap: "goToBookFilght"
            },
            mainNavView: {
                pop: "onMainViewPop"
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    goToBookFilght: function (btn) {
        var me = this,
            mainNavView = me.getMainNavView(),
            mainNavBar = mainNavView.getNavigationBar();
        // mainNavBar.show(false);
        mainNavView.push({
            xtype: "findaflight"
        });
    },

    onMainViewPop: function () {
    }
});
