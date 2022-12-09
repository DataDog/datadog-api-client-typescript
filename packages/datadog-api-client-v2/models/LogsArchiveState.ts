/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The state of the archive.
 */

export type LogsArchiveState =
  | typeof UNKNOWN
  | typeof WORKING
  | typeof FAILING
  | typeof WORKING_AUTH_LEGACY
  | UnparsedObject;
export const UNKNOWN = "UNKNOWN";
export const WORKING = "WORKING";
export const FAILING = "FAILING";
export const WORKING_AUTH_LEGACY = "WORKING_AUTH_LEGACY";
