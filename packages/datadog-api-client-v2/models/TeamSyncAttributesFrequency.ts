/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How often the sync process should be run. Defaults to `once` when not provided.
 */

export type TeamSyncAttributesFrequency =
  | typeof ONCE
  | typeof CONTINUOUSLY
  | typeof PAUSED
  | UnparsedObject;
export const ONCE = "once";
export const CONTINUOUSLY = "continuously";
export const PAUSED = "paused";
