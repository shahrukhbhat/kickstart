'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QixpQkFDTyxBQURQLElBQ1csQUFEWCx1QkFDa0MsQUFEbEMsbUJBRU8sQUFGUCxJQUVXLEFBRlgsZ0NBRTJDLEFBRjNDLDZCQUdPLEFBSFAsSUFHVyxBQUhYLG9DQUcrQyxBQUgvQzs7QUFLQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9TQi9EZXNrdG9wL0Jsb2NrY2hhaW4va2lja3N0YXJ0In0=