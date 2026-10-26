/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing suppressions for a rule, or the recommended suppression lists published by a standard pattern.
 * There are three types of suppressions, `starts_with`, `ends_with`, and `exact_match`.
 * Rules based on the Datadog library can use recommended or custom suppressions. Custom rules can only use custom suppressions.
 * Suppressed matches are not obfuscated, counted in metrics, or displayed in the Findings page.
 */
export class SensitiveDataScannerSuppressions {
  /**
   * List of strings to use for suppression of matches ending with these strings.
   */
  "endsWith"?: Array<string>;
  /**
   * List of strings to use for suppression of matches exactly matching these strings.
   */
  "exactMatch"?: Array<string>;
  /**
   * List of strings to use for suppression of matches starting with these strings.
   */
  "startsWith"?: Array<string>;
  /**
   * Should the rule use the underlying standard pattern suppression configuration. If set to `true`, the rule must be tied
   * to a standard pattern. If set to `false`, the specified suppressions are applied.
   */
  "useRecommendedSuppressions"?: boolean;

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
    endsWith: {
      baseName: "ends_with",
      type: "Array<string>",
    },
    exactMatch: {
      baseName: "exact_match",
      type: "Array<string>",
    },
    startsWith: {
      baseName: "starts_with",
      type: "Array<string>",
    },
    useRecommendedSuppressions: {
      baseName: "use_recommended_suppressions",
      type: "boolean",
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
    return SensitiveDataScannerSuppressions.attributeTypeMap;
  }

  public constructor() {}
}
