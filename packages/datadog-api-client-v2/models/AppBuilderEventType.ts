/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The response to the event.
 */

export type AppBuilderEventType =
  | typeof CUSTOM
  | typeof SETCOMPONENTSTATE
  | typeof TRIGGERQUERY
  | typeof OPENMODAL
  | typeof CLOSEMODAL
  | typeof OPENURL
  | typeof DOWNLOADFILE
  | typeof SETSTATEVARIABLEVALUE
  | UnparsedObject;
export const CUSTOM = "custom";
export const SETCOMPONENTSTATE = "setComponentState";
export const TRIGGERQUERY = "triggerQuery";
export const OPENMODAL = "openModal";
export const CLOSEMODAL = "closeModal";
export const OPENURL = "openUrl";
export const DOWNLOADFILE = "downloadFile";
export const SETSTATEVARIABLEVALUE = "setStateVariableValue";
