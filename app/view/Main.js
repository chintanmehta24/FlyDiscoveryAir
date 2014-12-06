Ext.define('FlyDiscoveryAir.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
	    "FlyDiscoveryAir.view.Home",
	    "Ext.form.FieldSet",
	    "Ext.Img"
    ],
    config: {
        navigationBar: false,

        items: [
            {
                title: 'Home',
                xtype: "home"
            }
        ]
    }
});
