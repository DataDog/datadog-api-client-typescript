import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListConnectionsResponseDataAttributes } from "./ListConnectionsResponseDataAttributes";
import { ListConnectionsResponseDataType } from "./ListConnectionsResponseDataType";

export class ListConnectionsResponseData {
  "attributes"?: ListConnectionsResponseDataAttributes;
  "id"?: string;
  /**
   * List connections response resource type.
   */
  "type": ListConnectionsResponseDataType;
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
      type: "ListConnectionsResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ListConnectionsResponseDataType",
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
    return ListConnectionsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
