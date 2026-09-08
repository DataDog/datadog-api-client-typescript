/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Source of the anomaly detection configuration.
 */

export type TimeseriesAnomalyInvestigationConfigurationSource =
  | typeof REQUEST_FORMULA
  | typeof WATCHDOG_EXPLAINS_DEFAULT
  | UnparsedObject;
export const REQUEST_FORMULA = "request_formula";
export const WATCHDOG_EXPLAINS_DEFAULT = "watchdog_explains_default";
