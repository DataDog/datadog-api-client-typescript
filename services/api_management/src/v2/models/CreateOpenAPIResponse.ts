import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateOpenAPIResponseData } from "./CreateOpenAPIResponseData";

/**
 * Response for `CreateOpenAPI` operation.
 */
export class CreateOpenAPIResponse {
  /**
   * Data envelope for `CreateOpenAPIResponse`.
   */
  "data"?: CreateOpenAPIResponseData;
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
      type: "CreateOpenAPIResponseData",
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
    return CreateOpenAPIResponse.attributeTypeMap;
  }

  public constructor() {}
}
