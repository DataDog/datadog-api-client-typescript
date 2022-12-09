/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Sorting options
 */

export type ApplicationKeysSort =
  | typeof CREATED_AT_ASCENDING
  | typeof CREATED_AT_DESCENDING
  | typeof LAST4_ASCENDING
  | typeof LAST4_DESCENDING
  | typeof NAME_ASCENDING
  | typeof NAME_DESCENDING
  | UnparsedObject;
export const CREATED_AT_ASCENDING = "created_at";
export const CREATED_AT_DESCENDING = "-created_at";
export const LAST4_ASCENDING = "last4";
export const LAST4_DESCENDING = "-last4";
export const NAME_ASCENDING = "name";
export const NAME_DESCENDING = "-name";
