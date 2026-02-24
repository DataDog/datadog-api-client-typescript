/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sorting options for personal access tokens.
 */

export type PersonalAccessTokensSort =
  | typeof NAME_ASCENDING
  | typeof NAME_DESCENDING
  | typeof CREATED_AT_ASCENDING
  | typeof CREATED_AT_DESCENDING
  | typeof EXPIRES_AT_ASCENDING
  | typeof EXPIRES_AT_DESCENDING
  | UnparsedObject;
export const NAME_ASCENDING = "name";
export const NAME_DESCENDING = "-name";
export const CREATED_AT_ASCENDING = "created_at";
export const CREATED_AT_DESCENDING = "-created_at";
export const EXPIRES_AT_ASCENDING = "expires_at";
export const EXPIRES_AT_DESCENDING = "-expires_at";
