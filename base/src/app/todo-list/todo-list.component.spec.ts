import * as angular from "angular";

import { IAppConstantsService, IUtilitiesService } from "../app.module";

import { TodoListController } from "./todo-list.component";
import Todo from "./todo/todo.model";

// Addition of angular-mocks and jasmine references is done on the gulpfile
describe("TodoListController", () => {
    let httpBackend: ng.IHttpBackendService;
    let componentController: ng.IComponentControllerService;
    let AppConstantsService: IAppConstantsService;
    let UtilitiesService: IUtilitiesService;

    // Set up the module
    beforeEach(angular.mock.module("app"));

    beforeEach(inject((_$httpBackend_, _$componentController_, _AppConstantsService_, _UtilitiesService_) => {

        // Set up the mock http service responses
        httpBackend = _$httpBackend_;

        // The $componentController service is used to create instances of controllers
        componentController = _$componentController_;

        AppConstantsService = _AppConstantsService_;
        UtilitiesService = _UtilitiesService_;

        // returns the current list of todos
        httpBackend.whenGET((url: string) => {
            return url.startsWith(AppConstantsService.Application.WS_URL + "/todos");
        }).respond((method: string, url: string, data: string, headers: Object, params?: any) => {

            const response = [];

            for (let i = 0; i < 4; i++) {
                const todo = new Todo();

                todo.userId = 1;
                todo.id = i;
                todo.title = "title";
                todo.completed = Math.random() > 0.5;

                response.push(todo);
            }

            return [200, response, {}, "ok"];
        });
    }));

    afterEach(() => {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("expect controller fetches data after $onInit", () => {
        const controller = componentController("todoList", null, null) as TodoListController;
        controller.$onInit();
        httpBackend.flush();
    });

    it("controller.todos is not undefined after $onInit", () => {
        const controller = componentController("todoList", null, null) as TodoListController;
        controller.$onInit();
        httpBackend.flush();
        expect(controller.todos).not.toBeUndefined("controller.todos is undefined...");
    });

    it("controller.todos is not null after $onInit", () => {
        const controller = componentController("todoList", null, null) as TodoListController;
        controller.$onInit();
        httpBackend.flush();
        expect(controller.todos).not.toBeNull("controller.todos is null...");
    });

    it("controller.isLoadingData is false after $onInit", () => {
        const controller = componentController("todoList", null, null) as TodoListController;
        controller.$onInit();
        httpBackend.flush();
        expect(controller.isLoadingData).toBeFalsy("isLoadingData is true after the loading...");
    });
});
