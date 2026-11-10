/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The kind of transform.
 */

export type ArbitraryRuleTagValueTransformType =
  | typeof STRING_REPLACE
  | typeof REGEX_EXTRACT
  | typeof REGEX_REPLACE
  | typeof LOOKUP_MAP
  | UnparsedObject;
export const STRING_REPLACE = "string_replace";
export const REGEX_EXTRACT = "regex_extract";
export const REGEX_REPLACE = "regex_replace";
export const LOOKUP_MAP = "lookup_map";
