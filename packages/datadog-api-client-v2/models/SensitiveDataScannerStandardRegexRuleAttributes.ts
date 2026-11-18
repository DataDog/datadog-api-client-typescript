/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerIncludedKeywordConfiguration } from "./SensitiveDataScannerIncludedKeywordConfiguration";
import { SensitiveDataScannerRulePriority } from "./SensitiveDataScannerRulePriority";
import { SensitiveDataScannerStandardRegexRuleType } from "./SensitiveDataScannerStandardRegexRuleType";
import { SensitiveDataScannerSuppressions } from "./SensitiveDataScannerSuppressions";
import { SensitiveDataScannerTextReplacement } from "./SensitiveDataScannerTextReplacement";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a rule based on a standard regex rule, whose pattern is maintained by Datadog.
 */
export class SensitiveDataScannerStandardRegexRuleAttributes {
  /**
   * Description of the rule.
   */
  "description"?: string;
  /**
   * Attributes excluded from the scan. If namespaces is provided, it has to be a sub-path of the namespaces array.
   */
  "excludedNamespaces"?: Array<string>;
  /**
   * Object defining a set of keywords and a number of characters that help reduce noise.
   * You can provide a list of keywords you would like to check within a defined proximity of the matching pattern.
   * If any of the keywords are found within the proximity check, the match is kept.
   * If none are found, the match is discarded.
   */
  "includedKeywordConfiguration"?: SensitiveDataScannerIncludedKeywordConfiguration;
  /**
   * Whether or not the rule is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the rule.
   */
  "name"?: string;
  /**
   * Attributes included in the scan. If namespaces is empty or missing, all attributes except excluded_namespaces are scanned.
   * If both are missing the whole event is scanned.
   */
  "namespaces"?: Array<string>;
  /**
   * Severity of the issues found by the rule.
   */
  "priority"?: SensitiveDataScannerRulePriority;
  /**
   * Type of a rule based on a standard regex rule.
   */
  "ruleType": SensitiveDataScannerStandardRegexRuleType;
  /**
   * Object describing suppressions for a rule, or the recommended suppression lists published by a standard pattern.
   * There are three types of suppressions, `starts_with`, `ends_with`, and `exact_match`.
   * Rules based on the Datadog library can use recommended or custom suppressions. Custom rules can only use custom suppressions.
   * Suppressed matches are not obfuscated, counted in metrics, or displayed in the Findings page.
   */
  "suppressions"?: SensitiveDataScannerSuppressions;
  /**
   * List of tags.
   */
  "tags"?: Array<string>;
  /**
   * Object describing how the scanned event will be replaced.
   */
  "textReplacement"?: SensitiveDataScannerTextReplacement;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    excludedNamespaces: {
      baseName: "excluded_namespaces",
      type: "Array<string>",
    },
    includedKeywordConfiguration: {
      baseName: "included_keyword_configuration",
      type: "SensitiveDataScannerIncludedKeywordConfiguration",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    namespaces: {
      baseName: "namespaces",
      type: "Array<string>",
    },
    priority: {
      baseName: "priority",
      type: "SensitiveDataScannerRulePriority",
    },
    ruleType: {
      baseName: "rule_type",
      type: "SensitiveDataScannerStandardRegexRuleType",
      required: true,
    },
    suppressions: {
      baseName: "suppressions",
      type: "SensitiveDataScannerSuppressions",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    textReplacement: {
      baseName: "text_replacement",
      type: "SensitiveDataScannerTextReplacement",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerStandardRegexRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
