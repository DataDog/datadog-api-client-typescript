/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The SIEM pricing model (SKU) for the organization
 */

export type SecurityMonitoringSKU =
  | typeof PER_GB_ANALYZED
  | typeof PER_EVENT_IN_SIEM_INDEX_2023
  | typeof ADD_ON_2024
  | UnparsedObject;
export const PER_GB_ANALYZED = "per_gb_analyzed";
export const PER_EVENT_IN_SIEM_INDEX_2023 = "per_event_in_siem_index_2023";
export const ADD_ON_2024 = "add_on_2024";
