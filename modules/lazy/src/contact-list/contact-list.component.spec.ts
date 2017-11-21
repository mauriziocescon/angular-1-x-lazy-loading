import * as angular from "angular";

import { ContactListController } from "./contact-list.component";

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe("ContactListController", () => {
    let rootScope: ng.IRootScopeService;
    let httpBackend: ng.IHttpBackendService;
    let q: ng.IQService;
    let componentController: ng.IComponentControllerService;

    // Set up the module
    beforeEach(angular.mock.module("lazy", ($provide: ng.auto.IProvideService) => {
        $provide.value("$translate", () => {});
        $provide.value("UIUtilitiesService", () => {});
        $provide.value("UtilitiesService", () => {});
    }));

    beforeEach(inject(($rootScope: ng.IRootScopeService,
                       $httpBackend: ng.IHttpBackendService,
                       $q: ng.IQService,
                       $componentController: ng.IComponentControllerService) => {

        // Update ui
        rootScope = $rootScope;

        // Set up the mock http service responses
        httpBackend = $httpBackend;

        // Manage fake promises
        q = $q;

        // The $componentController service is used to create instances of controllers
        componentController = $componentController;
    }));

    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("controller.contacts is not undefined after $onInit", () => {
        const controller = componentController("contactList", {}, null) as ContactListController;
        controller.$onInit();
        expect(controller.contacts).not.toBeUndefined("controller.contacts is undefined...");
    });

    it("controller.contacts is not null after $onInit", () => {
        const controller = componentController("contactList", {}, null) as ContactListController;
        controller.$onInit();
        expect(controller.contacts).not.toBeNull("controller.contacts is null...");
    });
});
