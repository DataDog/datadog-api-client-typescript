/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The types of changes the retention filter accepts. `complete` filters can be updated and deleted.
 * `limited` filters are default retention filters that can't be deleted.
 */

export type RUMRetentionFilterEditionMode =
  | typeof UNKNOWN
  | typeof COMPLETE
  | typeof LIMITED
  | UnparsedObject;
export const UNKNOWN = "unknown";
export const COMPLETE = "complete";
export const LIMITED = "limited";
