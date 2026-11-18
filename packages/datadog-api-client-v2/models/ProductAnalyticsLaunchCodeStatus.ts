/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether the inspected code sends the event, or attaches the property to the event.
 */

export type ProductAnalyticsLaunchCodeStatus =
  | typeof FOUND
  | typeof NOT_FOUND
  | UnparsedObject;
export const FOUND = "found";
export const NOT_FOUND = "not_found";
