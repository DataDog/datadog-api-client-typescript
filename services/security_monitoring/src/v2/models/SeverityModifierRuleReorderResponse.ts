import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SeverityModifierRuleReorderItem } from "./SeverityModifierRuleReorderItem";

/**
 * The response of a severity modifier rule reorder request.
 */
export class SeverityModifierRuleReorderResponse {
  /**
   * The ordered list of severity modifier rules; every rule must be included.
   */
  "data": Array<SeverityModifierRuleReorderItem>;
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
      type: "Array<SeverityModifierRuleReorderItem>",
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
    return SeverityModifierRuleReorderResponse.attributeTypeMap;
  }

  public constructor() {}
}
