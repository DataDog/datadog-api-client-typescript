/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The level of detail for the request.
 */

export type ApmStatsQueryRowType =
  | typeof SERVICE
  | typeof RESOURCE
  | typeof SPAN
  | UnparsedObject;
export const SERVICE = "service";
export const RESOURCE = "resource";
export const SPAN = "span";
