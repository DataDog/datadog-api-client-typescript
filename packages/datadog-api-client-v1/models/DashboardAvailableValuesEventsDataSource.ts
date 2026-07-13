/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The events-based data source for the query.
 */

export type DashboardAvailableValuesEventsDataSource =
  | typeof SPANS
  | typeof LOGS
  | typeof RUM
  | UnparsedObject;
export const SPANS = "spans";
export const LOGS = "logs";
export const RUM = "rum";
