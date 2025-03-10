/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The origin source of the retention filter, which may be created or updated through the Datadog UI, terraform, or other channels such as direct API calls.
 */

export type RumRetentionFilterSource =
  | typeof UI
  | typeof TERRAFORM
  | typeof DEFAULT
  | typeof UNKNOWN
  | UnparsedObject;
export const UI = "ui";
export const TERRAFORM = "terraform";
export const DEFAULT = "default";
export const UNKNOWN = "unknown";
