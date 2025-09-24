import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesValidateQueryResponseData } from "./RulesValidateQueryResponseData";

/**
 * The definition of `RulesValidateQueryResponse` object.
 */
export class RulesValidateQueryResponse {
  /**
   * The definition of `RulesValidateQueryResponseData` object.
   */
  "data"?: RulesValidateQueryResponseData;
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
      type: "RulesValidateQueryResponseData",
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
    return RulesValidateQueryResponse.attributeTypeMap;
  }

  public constructor() {}
}
