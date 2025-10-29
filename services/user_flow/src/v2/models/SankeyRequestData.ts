import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SankeyRequestDataAttributes } from "./SankeyRequestDataAttributes";
import { SankeyRequestDataType } from "./SankeyRequestDataType";

export class SankeyRequestData {
  "attributes"?: SankeyRequestDataAttributes;
  "id"?: string;
  "type": SankeyRequestDataType;
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
      type: "SankeyRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SankeyRequestDataType",
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
    return SankeyRequestData.attributeTypeMap;
  }

  public constructor() {}
}
