import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RulesValidateQueryRequestData } from "./RulesValidateQueryRequestData";

/**
 * The definition of `RulesValidateQueryRequest` object.
 */
export class RulesValidateQueryRequest {
  /**
   * The definition of `RulesValidateQueryRequestData` object.
   */
  "data"?: RulesValidateQueryRequestData;
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
      type: "RulesValidateQueryRequestData",
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
    return RulesValidateQueryRequest.attributeTypeMap;
  }

  public constructor() {}
}
