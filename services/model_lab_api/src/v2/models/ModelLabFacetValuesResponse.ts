import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabFacetValuesData } from "./ModelLabFacetValuesData";

/**
 * Response containing available values for a facet key.
 */
export class ModelLabFacetValuesResponse {
  /**
   * A facet values JSON:API resource object.
   */
  "data": ModelLabFacetValuesData;
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
      type: "ModelLabFacetValuesData",
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
    return ModelLabFacetValuesResponse.attributeTypeMap;
  }

  public constructor() {}
}
