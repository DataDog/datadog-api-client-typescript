import { UnparsedObject } from "@datadog/datadog-api-client";

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
