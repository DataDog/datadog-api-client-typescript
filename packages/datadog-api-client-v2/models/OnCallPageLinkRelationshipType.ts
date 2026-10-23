/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the parent resource relates to the child resource.
 */

export type OnCallPageLinkRelationshipType =
  | typeof RELATES_TO
  | typeof CAUSES
  | typeof BLOCKS
  | typeof DUPLICATES
  | typeof PARENT_OF
  | typeof SUCCESSOR_OF
  | typeof ESCALATES_TO
  | typeof PAGES
  | UnparsedObject;
export const RELATES_TO = "relates_to";
export const CAUSES = "causes";
export const BLOCKS = "blocks";
export const DUPLICATES = "duplicates";
export const PARENT_OF = "parent_of";
export const SUCCESSOR_OF = "successor_of";
export const ESCALATES_TO = "escalates_to";
export const PAGES = "pages";
