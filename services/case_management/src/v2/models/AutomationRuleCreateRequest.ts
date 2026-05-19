import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleCreate } from "./AutomationRuleCreate";

/**
 * Request payload for creating an automation rule.
 */
export class AutomationRuleCreateRequest {
  /**
   * Data object for creating an automation rule.
   */
  "data": AutomationRuleCreate;
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
      type: "AutomationRuleCreate",
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
    return AutomationRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
