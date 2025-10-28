import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributesRulesetsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItems";

export class GetMultipleRulesetsResponseDataAttributes {
  "rulesets"?: Array<GetMultipleRulesetsResponseDataAttributesRulesetsItems>;
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
    rulesets: {
      baseName: "rulesets",
      type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItems>",
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
    return GetMultipleRulesetsResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
