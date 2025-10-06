import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsRequestData } from "./GetMultipleRulesetsRequestData";

/**
 * The definition of `GetMultipleRulesetsRequest` object.
 */
export class GetMultipleRulesetsRequest {
  /**
   * The definition of `GetMultipleRulesetsRequestData` object.
   */
  "data"?: GetMultipleRulesetsRequestData;
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
      type: "GetMultipleRulesetsRequestData",
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
    return GetMultipleRulesetsRequest.attributeTypeMap;
  }

  public constructor() {}
}
