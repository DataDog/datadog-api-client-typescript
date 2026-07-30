/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The rule used to combine the composite rule's predicates. `all_of` requires every predicate
 * to match, in any order. `in_order` requires every predicate to match in the given order.
 */

export type RUMOperationJourneyCompositeRuleKind =
  | typeof ALL_OF
  | typeof IN_ORDER
  | UnparsedObject;
export const ALL_OF = "all_of";
export const IN_ORDER = "in_order";
