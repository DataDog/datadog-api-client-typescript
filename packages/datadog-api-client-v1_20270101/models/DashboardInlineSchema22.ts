/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type DashboardInlineSchema22 =
  | typeof AUTO
  | typeof COMPACT
  | typeof FULL
  | typeof FIT_CONTENT
  | UnparsedObject;
export const AUTO = "auto";
export const COMPACT = "compact";
export const FULL = "full";
export const FIT_CONTENT = "fit-content";
