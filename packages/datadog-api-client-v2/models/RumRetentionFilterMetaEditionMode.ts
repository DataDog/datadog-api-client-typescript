/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Which attributes of the retention filter can be edited. `complete`: all attributes can be edited. `limited`: only the sample rates can be edited; the name, event type, and query are fixed and the filter cannot be reordered (for example, default filters). `unknown`: the edition mode is not set.
 */

export type RumRetentionFilterMetaEditionMode =
  | typeof UNKNOWN
  | typeof COMPLETE
  | typeof LIMITED
  | UnparsedObject;
export const UNKNOWN = "unknown";
export const COMPLETE = "complete";
export const LIMITED = "limited";
