import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { google } from 'google-maps';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/shared/auth/auth.service';
import { DriverService } from 'app/shared/services/drivers/driver.service';
// import { google } from '@agm/core/services/google-maps-types';
declare var google: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'drivers-map',
    templateUrl: './drivers-map.component.html',
    styleUrls: ['./drivers-map.component.scss']
})

export class DriversMapComponent implements OnInit {
    public lat = -34.932311;
    public lng = -54.956035;
    public scroll = false;
    public zoom = 12;
    private driverService;
    private auth;

    constructor(private http: HttpClient, private router: Router) {
        this.auth = new AuthService(this.http, this.router);
        this.driverService = new DriverService(this.http, this.auth);
    }


    onMapLoad(mapInstance: google.maps.Map) {
        this.driverService.getDrivers().subscribe((res) => {
            console.log(res);
            res.forEach(element => {
                if (element.coordinates.latitude != null) {
                    let contentString1 = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + element.name + ' ' + element.lastname + '</h1>' +
                        '<div id="bodyContent">' +
                        '</div>' +
                        '</div>';
                    let infowindow = new google.maps.InfoWindow({
                        content: contentString1
                    });
                    let marker = new google.maps.Marker({
                        map: mapInstance,
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        position: { lat: element.coordinates.latitude, lng: element.coordinates.longitude },
                        icon: {
                            url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
                        }
                    });
                    marker.addListener('click', function () {
                        infowindow.open(mapInstance, marker);
                    });
                }
            });
        })
        // const contentString1 = '<div id="content">' +
        //     '<div id="siteNotice">' +
        //     '</div>' +
        //     '<h1 id="firstHeading" class="firstHeading">Jose Ramirez</h1>' +
        //     '<div id="bodyContent">' +
        //     '</div>' +
        //     '</div>';
        // const contentString2 = '<div id="content">' +
        //     '<div id="siteNotice">' +
        //     '</div>' +
        //     '<h1 id="firstHeading" class="firstHeading">Florencia Díaz</h1>' +
        //     '<div id="bodyContent">' +
        //     '</div>' +
        //     '</div>';
        // const contentString3 = '<div id="content">' +
        //     '<div id="siteNotice">' +
        //     '</div>' +
        //     '<h1 id="firstHeading" class="firstHeading">Alberto Peña</h1>' +
        //     '<div id="bodyContent">' +
        //     '</div>' +
        //     '</div>';

        // const infowindow1 = new google.maps.InfoWindow({
        //     content: contentString1
        // });
        // const infowindow2 = new google.maps.InfoWindow({
        //     content: contentString2
        // });
        // const infowindow3 = new google.maps.InfoWindow({
        //     content: contentString3
        // });

        // const marker = new google.maps.Marker({
        //     map: mapInstance,
        //     draggable: true,
        //     animation: google.maps.Animation.DROP,
        //     position: { lat: -34.94896630294371, lng: -54.93338955218502 },
        //     icon: {
        //         url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
        //     }
        // });
        // marker.addListener('click', function () {
        //     infowindow1.open(mapInstance, marker);
        // });

        // const marker2 = new google.maps.Marker({
        //     map: mapInstance,
        //     draggable: true,
        //     animation: google.maps.Animation.DROP,
        //     position: { lat: -34.93025275418585, lng: -54.95311675659178 },
        //     icon: {
        //         url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
        //     }
        // });
        // marker2.addListener('click', function () {
        //     infowindow2.open(mapInstance, marker2);
        // });

        // const marker3 = new google.maps.Marker({
        //     map: mapInstance,
        //     draggable: true,
        //     animation: google.maps.Animation.DROP,
        //     position: { lat: -34.9311675364786, lng: -54.93496356597899 },
        //     icon: {
        //         url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
        //     }
        // });
        // marker3.addListener('click', function () {
        //     infowindow3.open(mapInstance, marker3);
        // });
    }



    toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    ngOnInit(): void {
    }
}
