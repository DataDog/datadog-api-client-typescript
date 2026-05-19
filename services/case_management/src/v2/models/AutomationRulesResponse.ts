import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRule } from "./AutomationRule";

/**
 * Response containing a list of automation rules for a project.
 */
export class AutomationRulesResponse {
  /**
   * List of automation rules.
   */
  "data": Array<AutomationRule>;
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
      type: "Array<AutomationRule>",
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
    return AutomationRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
