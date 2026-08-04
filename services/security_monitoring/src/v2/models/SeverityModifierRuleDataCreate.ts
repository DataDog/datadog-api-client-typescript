import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityModifierRuleAttributesCreate } from "./SeverityModifierRuleAttributesCreate";
import { SeverityModifierRuleType } from "./SeverityModifierRuleType";

/**
 * The data object for a severity modifier rule create or update request.
 */
export class SeverityModifierRuleDataCreate {
  /**
   * Attributes for creating or updating a severity modifier rule.
   */
  "attributes": SeverityModifierRuleAttributesCreate;
  /**
   * The JSON:API type for severity modifier rules.
   */
  "type": SeverityModifierRuleType;
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
      type: "SeverityModifierRuleAttributesCreate",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SeverityModifierRuleType",
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
    return SeverityModifierRuleDataCreate.attributeTypeMap;
  }

  public constructor() {}
}
