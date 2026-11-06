/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source of the last change to a RUM retention filter.
 */

export type RumRetentionFilterMetaSource =
  | typeof DEFAULT
  | typeof UI
  | typeof TERRAFORM
  | typeof UNKNOWN
  | UnparsedObject;
export const DEFAULT = "default";
export const UI = "ui";
export const TERRAFORM = "terraform";
export const UNKNOWN = "unknown";
