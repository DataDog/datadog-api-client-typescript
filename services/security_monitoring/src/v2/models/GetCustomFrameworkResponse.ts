import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FullCustomFrameworkData } from "./FullCustomFrameworkData";

/**
 * Response object to get a custom framework.
 */
export class GetCustomFrameworkResponse {
  /**
   * Contains type and attributes for custom frameworks.
   */
  "data": FullCustomFrameworkData;
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
      type: "FullCustomFrameworkData",
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
    return GetCustomFrameworkResponse.attributeTypeMap;
  }

  public constructor() {}
}
