import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseDataAttributes } from "./GetMultipleRulesetsResponseDataAttributes";
import { GetMultipleRulesetsResponseDataType } from "./GetMultipleRulesetsResponseDataType";

/**
 * The primary data object in the get-multiple-rulesets response, containing the response attributes and resource type.
 */
export class GetMultipleRulesetsResponseData {
  /**
   * The attributes of the get-multiple-rulesets response, containing the list of requested rulesets.
   */
  "attributes"?: GetMultipleRulesetsResponseDataAttributes;
  /**
   * The unique identifier of the get-multiple-rulesets response resource.
   */
  "id"?: string;
  /**
   * Get multiple rulesets response resource type.
   */
  "type": GetMultipleRulesetsResponseDataType;
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
      type: "GetMultipleRulesetsResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetMultipleRulesetsResponseDataType",
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
    return GetMultipleRulesetsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
