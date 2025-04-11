import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateOpenAPIResponseData } from "./UpdateOpenAPIResponseData";

/**
 * Response for `UpdateOpenAPI`.
 */
export class UpdateOpenAPIResponse {
  /**
   * Data envelope for `UpdateOpenAPIResponse`.
   */
  "data"?: UpdateOpenAPIResponseData;
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
      type: "UpdateOpenAPIResponseData",
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
    return UpdateOpenAPIResponse.attributeTypeMap;
  }

  public constructor() {}
}
