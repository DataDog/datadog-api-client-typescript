/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerCustomRegexRuleAttributes } from "./SensitiveDataScannerCustomRegexRuleAttributes";
import { SensitiveDataScannerMachineLearningRuleAttributes } from "./SensitiveDataScannerMachineLearningRuleAttributes";
import { SensitiveDataScannerStandardRegexRuleAttributes } from "./SensitiveDataScannerStandardRegexRuleAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Attributes of a rule of a scanning group of a target. They depend on the type of rule.
 */

export type SensitiveDataScannerTargetRuleAttributes =
  | SensitiveDataScannerCustomRegexRuleAttributes
  | SensitiveDataScannerStandardRegexRuleAttributes
  | SensitiveDataScannerMachineLearningRuleAttributes
  | UnparsedObject;
