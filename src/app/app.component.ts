import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'AngularJquery';
  ngOnInit() {

    $('.flip3D').on('click hover mouseenter mouseover', function() {
      flipBack($(this));
    });

    $('.flip3D').on('mouseleave mouseout', function() {
      flipFront($(this));
    });
  }
}

// function toggle(Jcard) {
//   return flipBack(Jcard) || flipFront(Jcard);
// }

function flipBack(Jcard) {
  if (Jcard.attr('data-click-state') !== 'back') {
    Jcard.attr('data-click-state', 'back');
    Jcard.find('.back')
      .css('transform', 'perspective(600px) rotateY(0)');
    Jcard.find('.front')
      .css('transform', 'perspective(600px) rotateY(-180deg)');
    return true;
  }
  return false;
}

function flipFront(Jcard) {
  if (Jcard.attr('data-click-state') !== 'front') {
    Jcard.attr('data-click-state', 'front');
    Jcard.find('.front')
      .css('transform', 'perspective(600px) rotateY(0deg)');
    Jcard.find('.back')
      .css('transform', 'perspective(600px) rotateY(180deg)');
    return true;
  }
  return false;
}
