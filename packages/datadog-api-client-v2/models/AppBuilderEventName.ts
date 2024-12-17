/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The triggering action for the event.
 */

export type AppBuilderEventName =
  | typeof PAGECHANGE
  | typeof TABLEROWCLICK
  | typeof TABLEROWBUTTONCLICK
  | typeof CHANGE
  | typeof SUBMIT
  | typeof CLICK
  | typeof TOGGLEOPEN
  | typeof CLOSE
  | typeof OPEN
  | typeof EXECUTIONFINISHED
  | UnparsedObject;
export const PAGECHANGE = "pageChange";
export const TABLEROWCLICK = "tableRowClick";
export const TABLEROWBUTTONCLICK = "_tableRowButtonClick";
export const CHANGE = "change";
export const SUBMIT = "submit";
export const CLICK = "click";
export const TOGGLEOPEN = "toggleOpen";
export const CLOSE = "close";
export const OPEN = "open";
export const EXECUTIONFINISHED = "executionFinished";
