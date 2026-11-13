import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerRuleData } from "./SensitiveDataScannerRuleData";

/**
 * Relationships of a scanning group of a target.
 */
export class SensitiveDataScannerTargetGroupRelationships {
  /**
   * Rules included in the group.
   */
  "rules": SensitiveDataScannerRuleData;
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
    rules: {
      baseName: "rules",
      type: "SensitiveDataScannerRuleData",
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
    return SensitiveDataScannerTargetGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
