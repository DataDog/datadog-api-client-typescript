import { UnparsedObject } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupIncludedItem } from "./SensitiveDataScannerGroupIncludedItem";
import { SensitiveDataScannerRuleIncludedItem } from "./SensitiveDataScannerRuleIncludedItem";

/**
 * An object related to the configuration.
 */
export type SensitiveDataScannerGetConfigIncludedItem =
  | SensitiveDataScannerRuleIncludedItem
  | SensitiveDataScannerGroupIncludedItem
  | UnparsedObject;
