import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationStrongLinkResponseData } from "./RUMOperationStrongLinkResponseData";

/**
 * The response for a single RUM operation strong link.
 */
export class RUMOperationStrongLinkResponse {
  /**
   * The data object in a RUM operation strong link response.
   */
  "data": RUMOperationStrongLinkResponseData;
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
      type: "RUMOperationStrongLinkResponseData",
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
    return RUMOperationStrongLinkResponse.attributeTypeMap;
  }

  public constructor() {}
}
