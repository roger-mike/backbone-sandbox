import Backbone from 'backbone';
import * as L from 'leaflet';
import $ from 'jquery';
import 'leaflet-css';


import './styles/test.css';

let AppView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    render: function() {
        console.log("Hello World! (in the console)");
        $('html body').append('<h1>Hello from the view!</h1>');
        $('html body').append('<div id="test-map"></div>');
        $('html body').append('<button class="pulse-btn">Click Me</button>');
        $('html body').append(this.$el);
        
        var mymap = L.map('test-map').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicGFyOTYxNSIsImEiOiJja2J2ZzZsYWYwMXZ6MnZxZXQwdm05YjlnIn0.UOVh7xgCJ234K9VuVmcmww'
        }).addTo(mymap);
    }
});

let App = new AppView();
