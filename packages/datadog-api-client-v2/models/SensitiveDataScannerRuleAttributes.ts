/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerTextReplacement } from "./SensitiveDataScannerTextReplacement";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the Sensitive Data Scanner rule.
 */
export class SensitiveDataScannerRuleAttributes {
  /**
   * Description of the rule.
   */
  "description"?: string;
  /**
   * Attributes excluded from the scan.
   */
  "excludedAttributes"?: Array<string>;
  /**
   * Whether or not the rule is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the rule.
   */
  "name"?: string;
  /**
   * Not included if there is a relationship to a standard pattern.
   */
  "pattern"?: string;
  /**
   * List of tags.
   */
  "tags"?: Array<string>;
  /**
   * Object describing how the scanned event will be replaced.
   */
  "textReplacement"?: SensitiveDataScannerTextReplacement;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    excludedAttributes: {
      baseName: "excluded_attributes",
      type: "Array<string>",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    pattern: {
      baseName: "pattern",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    textReplacement: {
      baseName: "text_replacement",
      type: "SensitiveDataScannerTextReplacement",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
