import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerStandardRuleType } from "./SensitiveDataScannerStandardRuleType";

/**
 * A standard rule.
 */
export class SensitiveDataScannerStandardRuleData {
  /**
   * ID of the standard rule.
   */
  "id": string;
  /**
   * Type of standard rule, based on how it detects sensitive data.
   */
  "type": SensitiveDataScannerStandardRuleType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerStandardRuleType",
      required: true,
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
    return SensitiveDataScannerStandardRuleData.attributeTypeMap;
  }

  public constructor() {}
}
