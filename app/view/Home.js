Ext.define('FlyDiscoveryAir.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    config: {
    	layout: {
    		type: "vbox",
    		align: "center",
    		// pack: "center"
		},
		scrollable: "vertical",
		cls: "home-view-cls",
    	items: [{
    		xtype: "fieldset",
    		cls: "homeBtnGroup",
    		items:[{
	    		xtype: "image",
	    		cls: "airlineLogoCls",
	    		width: "100%",
				height: "auto",
	    		mode: "element",
	    		src: "resources/images/logo.png"
	    	}, {
	    		xtype: "button",
	    		cls: "airlineMenuBtn top-shadow",
	    		action: "bookFlight",
	    		text: "Book Flight",
	    		iconAlign: "left",
	    		iconCls: "icon-awesome  icon-plane",
	    		ui: "plain"
	    	}, {
	    		xtype: "button",
	    		cls: "airlineMenuBtn",
	    		text: "My Flights",
	    		iconAlign: "left",
	    		iconCls: "icon-awesome  icon-user",
	    		ui: "plain"
	    	}, {
	    		xtype: "button",
	    		cls: "airlineMenuBtn",
	    		text: "Check In",
	    		iconAlign: "left",
	    		iconCls: "icon-awesome icon-signin",
	    		ui: "plain"
	    	}, {
	    		xtype: "button",
	    		cls: "airlineMenuBtn bottom-shadow",
	    		text: "Boarding Pass",
	    		iconAlign: "left",
	    		iconCls: "icon-awesome  icon-ticket",
	    		ui: "plain"
	    	}, {
	    		xtype: "image",
	    		cls: "airlineBottomLogoCls",
	    		mode: "element",
	    		src: "resources/images/nigeria.png"
	    	}]
    	}]
    }
});