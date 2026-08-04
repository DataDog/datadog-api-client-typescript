import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityModifierRuleDataResponse } from "./SeverityModifierRuleDataResponse";

/**
 * A single severity modifier rule response.
 */
export class SeverityModifierRuleResponse {
  /**
   * The data object for a severity modifier rule as returned by the API.
   */
  "data": SeverityModifierRuleDataResponse;
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
      type: "SeverityModifierRuleDataResponse",
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
    return SeverityModifierRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
