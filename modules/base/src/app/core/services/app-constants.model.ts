// tslint:disable:max-classes-per-file
import { Enum } from "../../shared/shared.module";

export class Api {
    public albums = "http://jsonplaceholder.typicode.com/albums";
    public comments = "http://jsonplaceholder.typicode.com/comments";
    public photos = "http://jsonplaceholder.typicode.com/photos";
    public posts = "http://jsonplaceholder.typicode.com/posts";
    public todos = "http://jsonplaceholder.typicode.com/todos";
    public users = "http://jsonplaceholder.typicode.com/users";
}

export class Application {
    public APP_NAME = "demo";
    public WS_URL = "http://jsonplaceholder.typicode.com";

    // tslint:disable:no-consecutive-blank-lines

    // @if MOCK_BACKEND = "false"
    public MOCK_BACKEND = false;
    public CAN_MOCK_WS_FAIL = false;
    public SHOW_ANALYSIS = true;
    public LOG_WS_REQUEST = false;
    public LOG_WS_RESPONSE = false;
    // @endif

    // @if MOCK_BACKEND = "true"
    public MOCK_BACKEND = true;
    public CAN_MOCK_WS_FAIL = true;
    public SHOW_ANALYSIS = true;
    public LOG_WS_REQUEST = true;
    public LOG_WS_RESPONSE = true;
    // @endif

    // tslint:enable:no-consecutive-blank-lines
}

export class Languages {
    public SUPPORTED_LANG = ["en", "it", "de"];
    public SUPPORTED_LANG_DESC = ["English", "Italiano", "Deutsch"];
}

export class LocalStorageKey {
    public LANGUAGE_ID = new Enum("LANGUAGE_ID");
}

export class Validator {
    public NUMBER = /^[0-9]+([\.|\,]{0,1}[0-9]+)?$/;
    public NUMBER_WITH_NO_DECIMAL = /^[0-9]+$/;
    public NUMBER_WITH_ONE_DECIMAL = /^[0-9]+[\.|\,]{0,1}[0-9]{0,1}$/;
    public NUMBER_WITH_TWO_DECIMALS = /^[0-9]+[\.|\,]{0,1}[0-9]{0,2}$/;
    public NUMBER_WITH_THREE_DECIMALS = /^[0-9]+[\.|\,]{0,1}[0-9]{0,3}$/;
}
