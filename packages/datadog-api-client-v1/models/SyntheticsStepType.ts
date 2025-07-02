/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Step type used in your Synthetic test.
 */

export type SyntheticsStepType =
  | typeof ASSERT_CURRENT_URL
  | typeof ASSERT_ELEMENT_ATTRIBUTE
  | typeof ASSERT_ELEMENT_CONTENT
  | typeof ASSERT_ELEMENT_PRESENT
  | typeof ASSERT_EMAIL
  | typeof ASSERT_FILE_DOWNLOAD
  | typeof ASSERT_FROM_JAVASCRIPT
  | typeof ASSERT_PAGE_CONTAINS
  | typeof ASSERT_PAGE_LACKS
  | typeof ASSERT_REQUESTS
  | typeof CLICK
  | typeof EXTRACT_FROM_JAVASCRIPT
  | typeof EXTRACT_FROM_EMAIL_BODY
  | typeof EXTRACT_VARIABLE
  | typeof GO_TO_EMAIL_LINK
  | typeof GO_TO_URL
  | typeof GO_TO_URL_AND_MEASURE_TTI
  | typeof HOVER
  | typeof PLAY_SUB_TEST
  | typeof PRESS_KEY
  | typeof REFRESH
  | typeof RUN_API_TEST
  | typeof SCROLL
  | typeof SELECT_OPTION
  | typeof TYPE_TEXT
  | typeof UPLOAD_FILES
  | typeof WAIT
  | UnparsedObject;
export const ASSERT_CURRENT_URL = "assertCurrentUrl";
export const ASSERT_ELEMENT_ATTRIBUTE = "assertElementAttribute";
export const ASSERT_ELEMENT_CONTENT = "assertElementContent";
export const ASSERT_ELEMENT_PRESENT = "assertElementPresent";
export const ASSERT_EMAIL = "assertEmail";
export const ASSERT_FILE_DOWNLOAD = "assertFileDownload";
export const ASSERT_FROM_JAVASCRIPT = "assertFromJavascript";
export const ASSERT_PAGE_CONTAINS = "assertPageContains";
export const ASSERT_PAGE_LACKS = "assertPageLacks";
export const ASSERT_REQUESTS = "assertRequests";
export const CLICK = "click";
export const EXTRACT_FROM_JAVASCRIPT = "extractFromJavascript";
export const EXTRACT_FROM_EMAIL_BODY = "extractFromEmailBody";
export const EXTRACT_VARIABLE = "extractVariable";
export const GO_TO_EMAIL_LINK = "goToEmailLink";
export const GO_TO_URL = "goToUrl";
export const GO_TO_URL_AND_MEASURE_TTI = "goToUrlAndMeasureTti";
export const HOVER = "hover";
export const PLAY_SUB_TEST = "playSubTest";
export const PRESS_KEY = "pressKey";
export const REFRESH = "refresh";
export const RUN_API_TEST = "runApiTest";
export const SCROLL = "scroll";
export const SELECT_OPTION = "selectOption";
export const TYPE_TEXT = "typeText";
export const UPLOAD_FILES = "uploadFiles";
export const WAIT = "wait";
