import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationCreateRequestData } from "./RUMOperationCreateRequestData";

/**
 * The request body for creating a RUM operation.
 */
export class RUMOperationCreateRequest {
  /**
   * The data object for creating a RUM operation.
   */
  "data": RUMOperationCreateRequestData;
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
      type: "RUMOperationCreateRequestData",
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
    return RUMOperationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
