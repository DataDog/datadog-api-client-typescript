/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Error code that can be returned by a Synthetic test.
 */

export type SyntheticsBrowserTestFailureCode =
  | typeof API_REQUEST_FAILURE
  | typeof ASSERTION_FAILURE
  | typeof DOWNLOAD_FILE_TOO_LARGE
  | typeof ELEMENT_NOT_INTERACTABLE
  | typeof EMAIL_VARIABLE_NOT_DEFINED
  | typeof EVALUATE_JAVASCRIPT
  | typeof EVALUATE_JAVASCRIPT_CONTEXT
  | typeof EXTRACT_VARIABLE
  | typeof FORBIDDEN_URL
  | typeof FRAME_DETACHED
  | typeof INCONSISTENCIES
  | typeof INTERNAL_ERROR
  | typeof INVALID_TYPE_TEXT_DELAY
  | typeof INVALID_URL
  | typeof INVALID_VARIABLE_PATTERN
  | typeof INVISIBLE_ELEMENT
  | typeof LOCATE_ELEMENT
  | typeof NAVIGATE_TO_LINK
  | typeof OPEN_URL
  | typeof PRESS_KEY
  | typeof SERVER_CERTIFICATE
  | typeof SELECT_OPTION
  | typeof STEP_TIMEOUT
  | typeof SUB_TEST_NOT_PASSED
  | typeof TEST_TIMEOUT
  | typeof TOO_MANY_HTTP_REQUESTS
  | typeof UNAVAILABLE_BROWSER
  | typeof UNKNOWN
  | typeof UNSUPPORTED_AUTH_SCHEMA
  | typeof UPLOAD_FILES_ELEMENT_TYPE
  | typeof UPLOAD_FILES_DIALOG
  | typeof UPLOAD_FILES_DYNAMIC_ELEMENT
  | typeof UPLOAD_FILES_NAME
  | UnparsedObject;
export const API_REQUEST_FAILURE = "API_REQUEST_FAILURE";
export const ASSERTION_FAILURE = "ASSERTION_FAILURE";
export const DOWNLOAD_FILE_TOO_LARGE = "DOWNLOAD_FILE_TOO_LARGE";
export const ELEMENT_NOT_INTERACTABLE = "ELEMENT_NOT_INTERACTABLE";
export const EMAIL_VARIABLE_NOT_DEFINED = "EMAIL_VARIABLE_NOT_DEFINED";
export const EVALUATE_JAVASCRIPT = "EVALUATE_JAVASCRIPT";
export const EVALUATE_JAVASCRIPT_CONTEXT = "EVALUATE_JAVASCRIPT_CONTEXT";
export const EXTRACT_VARIABLE = "EXTRACT_VARIABLE";
export const FORBIDDEN_URL = "FORBIDDEN_URL";
export const FRAME_DETACHED = "FRAME_DETACHED";
export const INCONSISTENCIES = "INCONSISTENCIES";
export const INTERNAL_ERROR = "INTERNAL_ERROR";
export const INVALID_TYPE_TEXT_DELAY = "INVALID_TYPE_TEXT_DELAY";
export const INVALID_URL = "INVALID_URL";
export const INVALID_VARIABLE_PATTERN = "INVALID_VARIABLE_PATTERN";
export const INVISIBLE_ELEMENT = "INVISIBLE_ELEMENT";
export const LOCATE_ELEMENT = "LOCATE_ELEMENT";
export const NAVIGATE_TO_LINK = "NAVIGATE_TO_LINK";
export const OPEN_URL = "OPEN_URL";
export const PRESS_KEY = "PRESS_KEY";
export const SERVER_CERTIFICATE = "SERVER_CERTIFICATE";
export const SELECT_OPTION = "SELECT_OPTION";
export const STEP_TIMEOUT = "STEP_TIMEOUT";
export const SUB_TEST_NOT_PASSED = "SUB_TEST_NOT_PASSED";
export const TEST_TIMEOUT = "TEST_TIMEOUT";
export const TOO_MANY_HTTP_REQUESTS = "TOO_MANY_HTTP_REQUESTS";
export const UNAVAILABLE_BROWSER = "UNAVAILABLE_BROWSER";
export const UNKNOWN = "UNKNOWN";
export const UNSUPPORTED_AUTH_SCHEMA = "UNSUPPORTED_AUTH_SCHEMA";
export const UPLOAD_FILES_ELEMENT_TYPE = "UPLOAD_FILES_ELEMENT_TYPE";
export const UPLOAD_FILES_DIALOG = "UPLOAD_FILES_DIALOG";
export const UPLOAD_FILES_DYNAMIC_ELEMENT = "UPLOAD_FILES_DYNAMIC_ELEMENT";
export const UPLOAD_FILES_NAME = "UPLOAD_FILES_NAME";
