import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationUpdateRequestData } from "./RUMOperationUpdateRequestData";

/**
 * The request body for updating a RUM operation.
 */
export class RUMOperationUpdateRequest {
  /**
   * The data object for updating a RUM operation.
   */
  "data": RUMOperationUpdateRequestData;
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
      type: "RUMOperationUpdateRequestData",
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
    return RUMOperationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
