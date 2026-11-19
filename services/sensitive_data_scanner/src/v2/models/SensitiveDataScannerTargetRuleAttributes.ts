import { UnparsedObject } from "@datadog/datadog-api-client";

import { SensitiveDataScannerCustomRegexRuleAttributes } from "./SensitiveDataScannerCustomRegexRuleAttributes";
import { SensitiveDataScannerMachineLearningRuleAttributes } from "./SensitiveDataScannerMachineLearningRuleAttributes";
import { SensitiveDataScannerStandardRegexRuleAttributes } from "./SensitiveDataScannerStandardRegexRuleAttributes";

/**
 * Attributes of a rule of a scanning group of a target. They depend on the type of rule.
 */
export type SensitiveDataScannerTargetRuleAttributes =
  | SensitiveDataScannerCustomRegexRuleAttributes
  | SensitiveDataScannerStandardRegexRuleAttributes
  | SensitiveDataScannerMachineLearningRuleAttributes
  | UnparsedObject;
