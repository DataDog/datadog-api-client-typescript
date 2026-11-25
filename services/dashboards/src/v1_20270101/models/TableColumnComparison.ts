import { UnparsedObject } from "@datadog/datadog-api-client";

import { TableColumnComparisonWithOtherColumnDiffFrom } from "./TableColumnComparisonWithOtherColumnDiffFrom";
import { TableColumnComparisonWithOtherColumnPercentDiffFrom } from "./TableColumnComparisonWithOtherColumnPercentDiffFrom";
import { TableColumnComparisonWithOtherColumnPercentOf } from "./TableColumnComparisonWithOtherColumnPercentOf";
import { TableColumnComparisonWithSelf } from "./TableColumnComparisonWithSelf";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TableColumnComparison =
  | TableColumnComparisonWithSelf
  | TableColumnComparisonWithOtherColumnDiffFrom
  | TableColumnComparisonWithOtherColumnPercentOf
  | TableColumnComparisonWithOtherColumnPercentDiffFrom
  | UnparsedObject;
