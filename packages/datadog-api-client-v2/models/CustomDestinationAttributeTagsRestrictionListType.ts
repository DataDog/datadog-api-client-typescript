/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How `forward_tags_restriction_list` parameter should be interpreted.
 * If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
 * are forwarded.
 *
 * `BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list.
 */

export type CustomDestinationAttributeTagsRestrictionListType =
  | typeof ALLOW_LIST
  | typeof BLOCK_LIST
  | UnparsedObject;
export const ALLOW_LIST = "ALLOW_LIST";
export const BLOCK_LIST = "BLOCK_LIST";
