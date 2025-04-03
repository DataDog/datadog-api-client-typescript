import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerRule } from "./SensitiveDataScannerRule";

/**
 * Rules included in the group.
 */
export class SensitiveDataScannerRuleData {
  /**
   * Rules included in the group. The order is important.
   */
  "data"?: Array<SensitiveDataScannerRule>;
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
    data: {
      baseName: "data",
      type: "Array<SensitiveDataScannerRule>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SensitiveDataScannerRuleData.attributeTypeMap;
  }

  public constructor() {}
}
