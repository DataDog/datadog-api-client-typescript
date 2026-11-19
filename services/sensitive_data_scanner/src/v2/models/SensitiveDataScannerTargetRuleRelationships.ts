import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerGroupData } from "./SensitiveDataScannerGroupData";
import { SensitiveDataScannerStandardRule } from "./SensitiveDataScannerStandardRule";

/**
 * Relationships of a rule of a scanning group of a target.
 */
export class SensitiveDataScannerTargetRuleRelationships {
  /**
   * A scanning group data.
   */
  "group"?: SensitiveDataScannerGroupData;
  /**
   * The standard rule a rule is based on. Not included for custom rules.
   */
  "standardRule"?: SensitiveDataScannerStandardRule;
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
    group: {
      baseName: "group",
      type: "SensitiveDataScannerGroupData",
    },
    standardRule: {
      baseName: "standard_rule",
      type: "SensitiveDataScannerStandardRule",
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
    return SensitiveDataScannerTargetRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
