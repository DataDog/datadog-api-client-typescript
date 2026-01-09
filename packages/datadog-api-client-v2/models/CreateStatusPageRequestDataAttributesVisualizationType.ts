/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

export type CreateStatusPageRequestDataAttributesVisualizationType =
  | typeof BARS_AND_UPTIME_PERCENTAGE
  | typeof BARS_ONLY
  | typeof COMPONENT_NAME_ONLY
  | UnparsedObject;
export const BARS_AND_UPTIME_PERCENTAGE = "bars_and_uptime_percentage";
export const BARS_ONLY = "bars_only";
export const COMPONENT_NAME_ONLY = "component_name_only";
