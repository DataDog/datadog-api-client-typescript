/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of available-fields data.
 */

export type UsageSummaryAvailableFieldsType =
  | typeof USAGE_SUMMARY_AVAILABLE_FIELDS
  | UnparsedObject;
export const USAGE_SUMMARY_AVAILABLE_FIELDS = "usage_summary_available_fields";
