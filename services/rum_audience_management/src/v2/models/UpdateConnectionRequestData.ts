import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateConnectionRequestDataAttributes } from "./UpdateConnectionRequestDataAttributes";
import { UpdateConnectionRequestDataType } from "./UpdateConnectionRequestDataType";

export class UpdateConnectionRequestData {
  "attributes"?: UpdateConnectionRequestDataAttributes;
  "id": string;
  /**
   * Connection id resource type.
   */
  "type": UpdateConnectionRequestDataType;
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
      type: "UpdateConnectionRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UpdateConnectionRequestDataType",
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
    return UpdateConnectionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
