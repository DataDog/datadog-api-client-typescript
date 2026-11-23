import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerRuleType } from "./SensitiveDataScannerRuleType";
import { SensitiveDataScannerTargetRuleAttributes } from "./SensitiveDataScannerTargetRuleAttributes";
import { SensitiveDataScannerTargetRuleRelationships } from "./SensitiveDataScannerTargetRuleRelationships";

/**
 * A rule of a scanning group of a target.
 */
export class SensitiveDataScannerTargetRuleIncludedItem {
  /**
   * Attributes of a rule of a scanning group of a target. They depend on the type of rule.
   */
  "attributes"?: SensitiveDataScannerTargetRuleAttributes;
  /**
   * ID of the rule.
   */
  "id"?: string;
  /**
   * Relationships of a rule of a scanning group of a target.
   */
  "relationships"?: SensitiveDataScannerTargetRuleRelationships;
  /**
   * Sensitive Data Scanner rule type.
   */
  "type"?: SensitiveDataScannerRuleType;
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
    attributes: {
      baseName: "attributes",
      type: "SensitiveDataScannerTargetRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerTargetRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "SensitiveDataScannerRuleType",
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
    return SensitiveDataScannerTargetRuleIncludedItem.attributeTypeMap;
  }

  public constructor() {}
}
