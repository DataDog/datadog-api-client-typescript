import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityModifierRuleAttributesCreate } from "./SeverityModifierRuleAttributesCreate";
import { SeverityModifierRuleType } from "./SeverityModifierRuleType";

/**
 * The data object for a severity modifier rule update request. The `id` must match the `rule_id` path parameter.
 */
export class SeverityModifierRuleDataUpdate {
  /**
   * Attributes for creating or updating a severity modifier rule.
   */
  "attributes": SeverityModifierRuleAttributesCreate;
  /**
   * The ID of the severity modifier rule to update.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return SeverityModifierRuleDataUpdate.attributeTypeMap;
  }

  public constructor() {}
}
