/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Color used to render the annotation in the UI.
 */

export type AnnotationColor =
  | typeof GRAY
  | typeof BLUE
  | typeof PURPLE
  | typeof GREEN
  | typeof YELLOW
  | typeof RED
  | UnparsedObject;
export const GRAY = "gray";
export const BLUE = "blue";
export const PURPLE = "purple";
export const GREEN = "green";
export const YELLOW = "yellow";
export const RED = "red";
