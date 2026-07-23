import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationStrongLinkUpdateRequestData } from "./RUMOperationStrongLinkUpdateRequestData";

/**
 * The request body for updating a RUM operation strong link.
 */
export class RUMOperationStrongLinkUpdateRequest {
  /**
   * The data object for updating a RUM operation strong link.
   */
  "data": RUMOperationStrongLinkUpdateRequestData;
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
      type: "RUMOperationStrongLinkUpdateRequestData",
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
    return RUMOperationStrongLinkUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
