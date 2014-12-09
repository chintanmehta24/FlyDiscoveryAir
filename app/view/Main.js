Ext.define('FlyDiscoveryAir.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
	    "FlyDiscoveryAir.view.Home",
        "FlyDiscoveryAir.view.FindAFlight",
	    "Ext.form.FieldSet",
	    "Ext.Img",
        "Ext.SegmentedButton",
        "Ext.field.Select",
        "Ext.field.DatePicker"
    ],
    config: {
        navigationBar: false,/*{
            hidden: true,
            cls: "main-nav-bar",
            ui: "plain"
        },*/

        cls: "main-nav",

        items: [
            {
                title: '',
                xtype: "home"
            }
        ]
    }
});
