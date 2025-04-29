import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomFrameworkData } from "./CustomFrameworkData";

/**
 * Request object to update a custom framework.
 */
export class UpdateCustomFrameworkRequest {
  /**
   * Contains type and attributes for custom frameworks.
   */
  "data": CustomFrameworkData;
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
      type: "CustomFrameworkData",
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
    return UpdateCustomFrameworkRequest.attributeTypeMap;
  }

  public constructor() {}
}
