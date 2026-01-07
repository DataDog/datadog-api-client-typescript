import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyResponseDataAttributes } from "./SankeyResponseDataAttributes";
import { SankeyResponseDataType } from "./SankeyResponseDataType";

export class SankeyResponseData {
  "attributes"?: SankeyResponseDataAttributes;
  "id"?: string;
  "type": SankeyResponseDataType;
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
      type: "SankeyResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SankeyResponseDataType",
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
    return SankeyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
