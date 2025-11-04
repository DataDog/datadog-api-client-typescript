import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMappingResponseDataAttributes } from "./GetMappingResponseDataAttributes";
import { GetMappingResponseDataType } from "./GetMappingResponseDataType";

export class GetMappingResponseData {
  "attributes"?: GetMappingResponseDataAttributes;
  "id"?: string;
  /**
   * Get mappings response resource type.
   */
  "type": GetMappingResponseDataType;
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
      type: "GetMappingResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GetMappingResponseDataType",
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
    return GetMappingResponseData.attributeTypeMap;
  }

  public constructor() {}
}
