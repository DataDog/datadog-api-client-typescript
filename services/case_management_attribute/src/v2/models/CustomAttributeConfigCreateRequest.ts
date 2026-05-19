import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomAttributeConfigCreate } from "./CustomAttributeConfigCreate";

/**
 * Request payload for creating a custom attribute configuration.
 */
export class CustomAttributeConfigCreateRequest {
  /**
   * Data object for creating a custom attribute configuration.
   */
  "data": CustomAttributeConfigCreate;
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
      type: "CustomAttributeConfigCreate",
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
    return CustomAttributeConfigCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
