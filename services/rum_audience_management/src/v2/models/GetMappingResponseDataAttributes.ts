import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMappingResponseDataAttributesAttributesItems } from "./GetMappingResponseDataAttributesAttributesItems";

export class GetMappingResponseDataAttributes {
  "attributes"?: Array<GetMappingResponseDataAttributesAttributesItems>;
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
      type: "Array<GetMappingResponseDataAttributesAttributesItems>",
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
    return GetMappingResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
