/*global QUnit*/

sap.ui.define([
	"ordersmgtsnp/workflow-ui-module/controller/OrdersManagement.controller"
], function (Controller) {
	"use strict";

	QUnit.module("OrdersManagement Controller");

	QUnit.test("I should test the OrdersManagement controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
