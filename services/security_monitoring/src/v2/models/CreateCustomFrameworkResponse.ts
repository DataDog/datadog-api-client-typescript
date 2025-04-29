import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FrameworkHandleAndVersionResponseData } from "./FrameworkHandleAndVersionResponseData";

/**
 * Response object to create a custom framework.
 */
export class CreateCustomFrameworkResponse {
  /**
   * Contains type and attributes for custom frameworks.
   */
  "data": FrameworkHandleAndVersionResponseData;
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
      type: "FrameworkHandleAndVersionResponseData",
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
    return CreateCustomFrameworkResponse.attributeTypeMap;
  }

  public constructor() {}
}
