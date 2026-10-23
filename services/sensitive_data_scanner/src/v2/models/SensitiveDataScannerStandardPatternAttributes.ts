import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerSuppressions } from "./SensitiveDataScannerSuppressions";

/**
 * Attributes of the Sensitive Data Scanner standard pattern.
 */
export class SensitiveDataScannerStandardPatternAttributes {
  /**
   * Description of the standard pattern.
   */
  "description"?: string;
  /**
   * List of included keywords.
   */
  "includedKeywords"?: Array<string>;
  /**
   * Name of the standard pattern.
   */
  "name"?: string;
  /**
   * (Deprecated) Regex to match, optionally documented for older standard rules. Refer to the `description` field to understand what the rule does.
   */
  "pattern"?: string;
  /**
   * Integer from 1 (high) to 5 (low) indicating standard pattern issue severity.
   */
  "priority"?: number;
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
    includedKeywords: {
      baseName: "included_keywords",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    suppressions: {
      baseName: "suppressions",
      type: "SensitiveDataScannerSuppressions",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return SensitiveDataScannerStandardPatternAttributes.attributeTypeMap;
  }

  public constructor() {}
}
