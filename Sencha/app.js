/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'Countdown',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Countdown.view.Main'));
        
        var picker = Ext.create('Ext.Picker', {
            
        slots: [
            {
            name: 'countdown',
            data : [
                {text: '10 Minuten (default)', value: 600},
                {text: '1 Minute', value: 60},
                {text: '2 Minuten', value: 120},
                {text: '3 Minuten', value: 180},
                {text: '4 Minuten', value: 240},
                {text: '5 Minuten', value: 300},
                {text: '6 Minuten', value: 360},
                {text: '7 Minuten', value: 420},
                {text: '8 Minuten', value: 480},
                {text: '9 Minuten', value: 540},
                {text: '11 Minuten', value: 660},
                {text: '12 Minuten', value: 720},
                {text: '13 Minuten', value: 780},
                {text: '14 Minuten', value: 840},
                {text: '15 Minuten', value: 900},
                {text: '16 Minuten', value: 960},
                {text: '17 Minuten', value: 1020},
                {text: '18 Minuten', value: 1080},
                {text: '19 Minuten', value: 1140},
                {text: '20 Minuten', value: 1200}
                ]
            }
        ],
        
        listeners: {
            change: function(picker, button) {
                var time = picker.getValue()['countdown'];
                var zeit = setInterval(countdown, 1000);
                function countdown(){
                    time = time - 1;
                    if(time === 0) {
                        clearInterval(zeit);
                        sound = Ext.create('Ext.Audio', {
						url: 'sound.mp3',
					       });
                        sound.play();
                        Ext.Msg.alert('', 'Ihre Zeit zum antworten ist abgelaufen...');
                        Ext.Viewport.setMasked(true);
				    }
                    }
                }
        }
        });
        Ext.Viewport.add(picker);
        picker.show();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
