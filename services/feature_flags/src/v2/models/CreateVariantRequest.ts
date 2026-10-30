import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateVariantData } from "./CreateVariantData";

/**
 * Request to add a variant to a feature flag.
 */
export class CreateVariantRequest {
  /**
   * Data for adding a variant to a feature flag.
   */
  "data": CreateVariantData;
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
      type: "CreateVariantData",
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
    return CreateVariantRequest.attributeTypeMap;
  }

  public constructor() {}
}
