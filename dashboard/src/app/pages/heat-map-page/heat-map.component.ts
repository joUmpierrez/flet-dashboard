import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { google } from 'google-maps';
// import { google } from '@agm/core/services/google-maps-types';
declare var google: any;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'heat-map',
    templateUrl: './heat-map.component.html',
    styleUrls: ['./heat-map.component.scss']
  })

export class HeatMapComponent implements OnInit {
  private map: any = null;
  private heatmap: any = null;
  public lat = -34.932311;
  public lng = -54.956035;
  public scroll = false;
  public zoom = 14;

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;

    // here our in other method after you get the coords; but make sure map is loaded

    const lat1 = new google.maps.LatLng(-34.940, -54.937);
    const lat2 = new google.maps.LatLng(-34.940, -54.937);
    const lat3 = new google.maps.LatLng(-34.938, -54.937);
    const lat4 = new google.maps.LatLng(-34.937, -54.937);
    const lat5 = new google.maps.LatLng(-34.938, -54.937);
    const lat6 = new google.maps.LatLng(-34.952, -54.936);
    const lat7 = new google.maps.LatLng(-34.953, -54.936);
    const lat8 = new google.maps.LatLng(-34.954, -54.936);
    const lat9 = new google.maps.LatLng(-34.955, -54.936);
    const lat10 = new google.maps.LatLng(-34.956, -54.937);
    const lat11 = new google.maps.LatLng(-34.92778269542132, -54.94664661033448);
    const lat12 = new google.maps.LatLng(-34.9279586211817, -54.94638911826905);
    const lat13 = new google.maps.LatLng(-34.92802899138024, -54.94626037223634);
    const lat14 = new google.maps.LatLng(-34.92809936151841, -54.94613162620362);
    const lat15 = new google.maps.LatLng(-34.92827528659979, -54.945831218793955);
    const lat16 = new google.maps.LatLng(-34.92848639619952, -54.94570247276124);
    const lat17 = new google.maps.LatLng(-34.928627135630876, -54.945616642072764);
    const lat18 = new google.maps.LatLng(-34.928732690045976, -54.94548789604005);
    const lat19 = new google.maps.LatLng(-34.92880305958059, -54.945359150007334);
    const lat20 = new google.maps.LatLng(-34.929014167822295, -54.945316234663096);
    const lat21 = new google.maps.LatLng(-34.92908453711548, -54.94518748863038);

    // const lat11 = new google.maps.LatLng(-34.937, -54.937);
    // const lat12 = new google.maps.LatLng(-34.937, -54.937);
    // const lat13 = new google.maps.LatLng(-34.937, -54.937);

    // tslint:disable-next-line: max-line-length
    const coords: google.maps.LatLng[] = [lat1, lat2, lat3, lat4, lat5, lat6, lat7, lat8, lat9, lat10, lat11,lat12, lat13, lat14, lat15, lat16, lat17, lat18, lat19, lat20, lat21]; // can also be a google.maps.MVCArray with LatLng[] inside
    this.heatmap = new google.maps.visualization.HeatmapLayer({
        map: this.map,
        data: coords,
        radius: 35,
    });
  }

  ngOnInit() {
  }
}
