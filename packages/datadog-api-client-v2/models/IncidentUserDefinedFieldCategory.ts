/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The section in which the field appears. Use "what_happened" for impact-related fields or "why_it_happened" for root cause fields. When null, the field appears in the Attributes section.
 */

export type IncidentUserDefinedFieldCategory =
  | typeof WHAT_HAPPENED
  | typeof WHY_IT_HAPPENED
  | UnparsedObject;
export const WHAT_HAPPENED = "what_happened";
export const WHY_IT_HAPPENED = "why_it_happened";
