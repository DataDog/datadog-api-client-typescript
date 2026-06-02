/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Priority of the Salesforce incident created from this template.
 */

export type SalesforceIncidentsTemplatePriority =
  | typeof CRITICAL
  | typeof HIGH
  | typeof MODERATE
  | typeof LOW
  | UnparsedObject;
export const CRITICAL = "Critical";
export const HIGH = "High";
export const MODERATE = "Moderate";
export const LOW = "Low";
