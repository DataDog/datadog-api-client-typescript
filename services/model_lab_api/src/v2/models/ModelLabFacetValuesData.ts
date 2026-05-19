import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ModelLabFacetValuesAttributes } from "./ModelLabFacetValuesAttributes";
import { ModelLabFacetValuesType } from "./ModelLabFacetValuesType";

/**
 * A facet values JSON:API resource object.
 */
export class ModelLabFacetValuesData {
  /**
   * Available values for a specific facet key.
   */
  "attributes": ModelLabFacetValuesAttributes;
  /**
   * The unique identifier of the facet values resource.
   */
  "id": string;
  /**
   * The JSON:API type for a facet values resource.
   */
  "type": ModelLabFacetValuesType;
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
    attributes: {
      baseName: "attributes",
      type: "ModelLabFacetValuesAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ModelLabFacetValuesType",
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
    return ModelLabFacetValuesData.attributeTypeMap;
  }

  public constructor() {}
}
