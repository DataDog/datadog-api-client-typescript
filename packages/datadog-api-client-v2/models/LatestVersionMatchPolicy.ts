/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The policy for matching the latest form version during an upsert operation.
 */

export type LatestVersionMatchPolicy =
  | typeof NONE
  | typeof IF_ETAG_MATCH
  | UnparsedObject;
export const NONE = "none";
export const IF_ETAG_MATCH = "if_etag_match";
