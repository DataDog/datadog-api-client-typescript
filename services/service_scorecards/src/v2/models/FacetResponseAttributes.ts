import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetItem } from "./FacetItem";

/**
 * Facet attributes.
 */
export class FacetResponseAttributes {
  /**
   * Array of facet values.
   */
  "items": Array<FacetItem>;
  /**
   * The key of the facet.
   */
  "key": string;
  /**
   * The display name of the facet.
   */
  "name"?: string;
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
    items: {
      baseName: "items",
      type: "Array<FacetItem>",
      required: true,
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
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
    return FacetResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
