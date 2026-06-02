/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type. The value must be `hardcoded_retention_filters`.
 */

export type RumHardcodedRetentionFilterType =
  | typeof HARDCODED_RETENTION_FILTERS
  | UnparsedObject;
export const HARDCODED_RETENTION_FILTERS = "hardcoded_retention_filters";
