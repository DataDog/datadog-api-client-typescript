import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityModifierRuleDataCreate } from "./SeverityModifierRuleDataCreate";

/**
 * The body of a severity modifier rule create request.
 */
export class SeverityModifierRuleCreateRequest {
  /**
   * The data object for a severity modifier rule create or update request.
   */
  "data": SeverityModifierRuleDataCreate;
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
      type: "SeverityModifierRuleDataCreate",
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
    return SeverityModifierRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
