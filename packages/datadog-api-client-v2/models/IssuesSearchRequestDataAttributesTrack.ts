/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Track of the events to query. Either track(s) or persona(s) must be specified.
 */

export type IssuesSearchRequestDataAttributesTrack =
  | typeof TRACE
  | typeof LOGS
  | typeof RUM
  | UnparsedObject;
export const TRACE = "trace";
export const LOGS = "logs";
export const RUM = "rum";
