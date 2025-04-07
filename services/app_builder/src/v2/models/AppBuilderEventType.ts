import { UnparsedObject } from "@datadog/datadog-api-client";

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
