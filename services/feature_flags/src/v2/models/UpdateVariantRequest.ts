import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateVariantData } from "./UpdateVariantData";

/**
 * Request to update an existing variant's name and value.
 */
export class UpdateVariantRequest {
  /**
   * Data for updating a variant.
   */
  "data": UpdateVariantData;
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
      type: "UpdateVariantData",
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
    return UpdateVariantRequest.attributeTypeMap;
  }

  public constructor() {}
}
