import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetInfoResponseDataAttributes } from "./FacetInfoResponseDataAttributes";
import { FacetInfoResponseDataType } from "./FacetInfoResponseDataType";

export class FacetInfoResponseData {
  "attributes"?: FacetInfoResponseDataAttributes;
  "id"?: string;
  /**
   * Users facet info resource type.
   */
  "type": FacetInfoResponseDataType;
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
      type: "FacetInfoResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FacetInfoResponseDataType",
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
    return FacetInfoResponseData.attributeTypeMap;
  }

  public constructor() {}
}
