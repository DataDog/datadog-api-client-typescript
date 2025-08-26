/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
