import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetInfoRequestDataAttributes } from "./FacetInfoRequestDataAttributes";
import { FacetInfoRequestDataType } from "./FacetInfoRequestDataType";

export class FacetInfoRequestData {
  "attributes"?: FacetInfoRequestDataAttributes;
  "id"?: string;
  /**
   * Users facet info request resource type.
   */
  "type": FacetInfoRequestDataType;
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
      type: "FacetInfoRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FacetInfoRequestDataType",
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
    return FacetInfoRequestData.attributeTypeMap;
  }

  public constructor() {}
}
