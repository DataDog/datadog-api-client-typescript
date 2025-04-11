import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SensitiveDataScannerRuleAttributes } from "./SensitiveDataScannerRuleAttributes";
import { SensitiveDataScannerRuleRelationships } from "./SensitiveDataScannerRuleRelationships";
import { SensitiveDataScannerRuleType } from "./SensitiveDataScannerRuleType";

/**
 * Response data related to the creation of a rule.
 */
export class SensitiveDataScannerRuleResponse {
  /**
   * Attributes of the Sensitive Data Scanner rule.
   */
  "attributes"?: SensitiveDataScannerRuleAttributes;
  /**
   * ID of the rule.
   */
  "id"?: string;
  /**
   * Relationships of a scanning rule.
   */
  "relationships"?: SensitiveDataScannerRuleRelationships;
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
      type: "SensitiveDataScannerRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "SensitiveDataScannerRuleRelationships",
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
    return SensitiveDataScannerRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
