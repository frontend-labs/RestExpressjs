'use strict';

var Footballer;

Footballer = (function($) {
  var bindEvents, catchDom, dom, fnEvents, init, st, stForm;
  st = {
    'formSearch': '#formSearch',
    'txtSearch': '#txtSearch',
    'btnSearch': '#btnSearch',
    'results': '.results'
  };
  dom = {};
  stForm = {
    'rules': {
      'name': {
        'required': true
      },
      'email': {
        'required': true,
        'email': true
      },
      'message': {
        'required': true
      }
    },
    'messages': {
      'name': {
        'required': 'Campo obligatorio'
      },
      'email': {
        'required': 'Campo obligatorio',
        'email': 'Formato Incorrecto'
      },
      'message': {
        'required': 'Campo obligatorio'
      }
    }
  };
  catchDom = function() {
    dom.formSearch = $(st.formSearch);
    dom.txtSearch = $(st.txtSearch);
    dom.btnSearch = $(st.btnSearch);
    dom.results = $(st.results);
  };
  bindEvents = function() {
    dom.btnSearch.on('click', fnEvents.searchFootballer);
  };
  fnEvents = {
    searchFootballer: function(event) {
      var valueTxtSearch;
      event.preventDefault();
      valueTxtSearch = dom.txtSearch.val();
      $.ajax({
        'method': 'get',
        'url': 'http://localhost:4000/search/' + valueTxtSearch,
        'success': function(data) {
          console.log(data);
          dom.results.html('<div class="footballer"><img class="photo" with="200" height="300" src="' + data.photo + '"><span class="name">' + data.name + ' ' + data.surname + '</span></div>');
        },
        'error': function(error) {
          console.log(error);
        }
      });
    }
  };
  init = function() {
    catchDom();
    bindEvents();
  };
  return {
    init: init
  };
})(jQuery);

$(function() {
  return Footballer.init();
});
