/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the suppressions for a rule. There are three types of suppressions, `starts_with`, `ends_with`, and `exact_match`.
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
