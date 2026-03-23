import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributesRulesetsItems } from "./GetMultipleRulesetsResponseDataAttributesRulesetsItems";

/**
 * The attributes of the get-multiple-rulesets response, containing the list of requested rulesets.
 */
export class GetMultipleRulesetsResponseDataAttributes {
  /**
   * The list of rulesets returned in response to the batch request.
   */
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
