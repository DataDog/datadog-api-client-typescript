/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Contains the metric category.
 */

export type UsageMetricCategory =
  | typeof STANDARD
  | typeof CUSTOM
  | UnparsedObject;
export const STANDARD = "standard";
export const CUSTOM = "custom";
