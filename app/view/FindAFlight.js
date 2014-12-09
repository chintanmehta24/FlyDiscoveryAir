Ext.define('FlyDiscoveryAir.view.FindAFlight', {
    extend: 'Ext.form.Panel',
    xtype: "findaflight",
    config: {
    	layout: {
    		type: "vbox",
    		align: "center",
    		// pack: "center"
		},
		scrollable: "vertical",
		cls: "home-view-cls find-a-flight",
    	items: [{
    		xtype: "titlebar",
	    	title: "Find a Flight",
	    	docked: "top",
	    	ui: "transparent",
	    	items: [{
	    		xtype: "button",
	    		ui: "back",
	    		iconCls: "arrow_left"
	    	}]
    	},{
    		xtype: "fieldset",
    		cls: "homeBtnGroup",
    		items:[{
    			xtype: "segmentedbutton",
    			defaults: {
    				iconAlign: "left",
    				flex: 1,
    				ui: "plain"
    			},
    			cls: "flight-type-cls",
    			items: [{
    				iconCls: "icon-awesome icon-arrow-right",
    				text: "One Way"
    			},{
    				pressed: true,
    				iconCls: "icon-awesome icon-retweet",
    				text: "Return"
    			}]
	    	}, {
	    		xtype: "fieldset",
	    		title: "Select Route",
	    		items: [{
	    			xtype: "selectfield",
	    			placeHolder: "Flying From",
	    			name: "flyFrom",
	    			autoSelect: false,
	    			store: {
	    				fields: [
	    					'value',
	    					'text'
	    				],
		    			data: [{
							value:"ABV",
							text: "ABUJA"
						},
						{
							value:"LOS",
							text: "LAGOS"
						},
						{
							value:"PHC",
							text: "PORT HARCOURT"
						},
						{
							value:"QUO",
							text: "UYO"
						}]
					}
	    		}, {
	    			xtype: "selectfield",
	    			placeHolder: "Flying To",
	    			name:"flyTo",
	    			autoSelect: false,
	    			store: {
	    				fields: [
	    					'value',
	    					'text'
	    				],
		    			data: [{
							value:"ABV",
							text: "ABUJA"
						},
						{
							value:"LOS",
							text: "LAGOS"
						},
						{
							value:"PHC",
							text: "PORT HARCOURT"
						},
						{
							value:"QUO",
							text: "UYO"
						}]
					}
	    		}]
	    	}, {
	    		xtype: "fieldset",
	    		title: "Select Dates",
	    		items: [{
	    			xtype: "datepickerfield",
	    			placeHolder: "Deptarture Date",
	    			name: "dateFrom",	
	    		}, {
	    			xtype: "datepickerfield",
	    			placeHolder: "Return Date",
	    			name:"dateTo",
	    		}]
	    	}, {
	    		xtype: "fieldset",
	    		layout: "hbox",
	    		defaults: {
	    			xtype: "selectfield",
	    			store: {
	    				fields: [
	    					'value',
	    					'text'
	    				],
		    			data: [
		    			{ value:0, text: "0" },
						{ value:1, text: "1" },
						{ value:2, text: "2" },
						{ value:3, text: "3" },
						{ value:4, text: "4" },
						{ value:5, text: "5" },
						{ value:6, text: "6" },
						{ value:7, text: "7" },
						{ value:8, text: "8" },
						{ value:9, text: "9" },
						{ value:10, text: "10" }]
					},
					labelAlign: "top",
					flex: 1
	    		},
	    		items: [
	    			{
    					label: "Adults <sub>(16+)</sub>",
		    			placeHolder: "Adults",
		    			name:"adults",
		    			margin: "0 0.5em 0 0"
	    			},
	    			{
    					label: "Children <sub>(2-16)</sub>",
		    			placeHolder: "Children",
		    			name:"children",
		    			margin: "0 0.5em 0 0"
	    			},
	    			{
    					label: "Infants <sub>(0-2)</sub>",
		    			placeHolder: "Infants",
		    			name:"infants"
	    			}
	    		]
	    	}, {
	    		xtype: "button",
	    		text: "Search Flights",
	    		ui: "action",
	    		cls: ""
	    	}]
    	}]
    }
});
