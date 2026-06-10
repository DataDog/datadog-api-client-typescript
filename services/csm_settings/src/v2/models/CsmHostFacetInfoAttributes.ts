import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmHostFacetInfoItem } from "./CsmHostFacetInfoItem";

/**
 * Attributes of a facet info response, containing the value distribution for the requested facet.
 */
export class CsmHostFacetInfoAttributes {
  /**
   * The list of facet value entries for the current page.
   */
  "items": Array<CsmHostFacetInfoItem>;
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
      type: "Array<CsmHostFacetInfoItem>",
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
    return CsmHostFacetInfoAttributes.attributeTypeMap;
  }

  public constructor() {}
}
