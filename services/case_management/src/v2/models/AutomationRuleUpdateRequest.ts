import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleUpdate } from "./AutomationRuleUpdate";

/**
 * Request payload for updating an automation rule.
 */
export class AutomationRuleUpdateRequest {
  /**
   * Data object for updating an automation rule.
   */
  "data": AutomationRuleUpdate;
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
      type: "AutomationRuleUpdate",
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
    return AutomationRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
