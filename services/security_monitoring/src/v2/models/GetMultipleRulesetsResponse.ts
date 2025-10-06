import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsResponseData } from "./GetMultipleRulesetsResponseData";

/**
 * The definition of `GetMultipleRulesetsResponse` object.
 */
export class GetMultipleRulesetsResponse {
  /**
   * The definition of `GetMultipleRulesetsResponseData` object.
   */
  "data"?: GetMultipleRulesetsResponseData;
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
      type: "GetMultipleRulesetsResponseData",
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
    return GetMultipleRulesetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
