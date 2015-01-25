Ext.define('Countdown.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Picker'
    ],
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Timer',
                iconCls: 'time',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Countdown'
                },

                html: [
                    "<h3>Timer für ARSNova geschrieben in Sencha Touch</h3>"
                ].join("")
            },
            {
                title: 'Impressum',
                iconCls: 'info',

                styleHtmlContent: true,
                scrollable: true,
                
                items: {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                
                html: [
                        "<h1>Impressum</h1>" +
						"<p>Josua Loh</p>" +
						"<p>Zum weißen Stein 9</p>" +
						"<p>35756 Mittenaar</p>" +
						"<p>E-mail: josua.loh@mni.thm.de</p>"
                ].join("")
            }
        ]
    }
});