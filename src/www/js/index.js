/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        console.log("init");
        var self = this
        $(function() {
            self.bindEvents();
                     });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        var myUrl = "http://192.168.1.5:3000/";
        $.getJSON( myUrl+'data/category.json', function(data) {
          console.log("cat success");
            var items = [];
              $.each( data.category, function( key, val ) {
                items.push( "<li id='" + val.url + "'> <a href='#' >" + val.name + "<a/></li>" );
              });
            $('#catrgoryList').append(items);
        })
          .done(function() {
            console.log( "second success" );
          })
          .fail(function(a,b) {
            alert("Categorys error");
          })
          .always(function() {
            console.log( "complete" );
          });
                var carousel;
        $(".carousel").itemslide(
            {
                disable_slide: true,
                duration: 1500
            }
        );        
        $( document ).on( "swipeleft swiperight", "#mainPage", function( e ) {
        if ( e.type === "swiperight" ) {
                $( "#leftPanel" ).panel( "open" );
            }
});
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
