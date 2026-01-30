/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The behavior when the tag already exists.
 */

export type DataAttributesRulesItemsIfTagExists =
  | typeof APPEND
  | typeof DO_NOT_APPLY
  | typeof REPLACE
  | UnparsedObject;
export const APPEND = "append";
export const DO_NOT_APPLY = "do_not_apply";
export const REPLACE = "replace";
