/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type IssueStreamState =
  | typeof OPEN
  | typeof RESOLVED
  | typeof IGNORED
  | typeof EXCLUDED
  | typeof IN_PROGRESS
  | typeof ACKNOWLEDGED
  | UnparsedObject;
export const OPEN = "OPEN";
export const RESOLVED = "RESOLVED";
export const IGNORED = "IGNORED";
export const EXCLUDED = "EXCLUDED";
export const IN_PROGRESS = "IN_PROGRESS";
export const ACKNOWLEDGED = "ACKNOWLEDGED";
