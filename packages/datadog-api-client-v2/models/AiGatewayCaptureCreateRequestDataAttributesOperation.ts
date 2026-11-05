/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Proposed operation for preview. Write endpoints infer it from the HTTP method.
 */

export type AiGatewayCaptureCreateRequestDataAttributesOperation =
  | typeof CREATE
  | typeof REPLACE
  | typeof DELETE
  | UnparsedObject;
export const CREATE = "create";
export const REPLACE = "replace";
export const DELETE = "delete";
