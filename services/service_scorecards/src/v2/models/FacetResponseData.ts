import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetResponseAttributes } from "./FacetResponseAttributes";
import { FacetType } from "./FacetType";

/**
 * Facet data.
 */
export class FacetResponseData {
  /**
   * Facet attributes.
   */
  "attributes": FacetResponseAttributes;
  /**
   * The unique ID of the facet.
   */
  "id": string;
  /**
   * The JSON:API type for facets.
   */
  "type": FacetType;
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
      type: "FacetResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FacetType",
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
    return FacetResponseData.attributeTypeMap;
  }

  public constructor() {}
}
