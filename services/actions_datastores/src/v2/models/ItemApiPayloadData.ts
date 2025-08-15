import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ItemApiPayloadDataAttributes } from "./ItemApiPayloadDataAttributes";
import { ItemApiPayloadDataType } from "./ItemApiPayloadDataType";

/**
 * The definition of `ItemApiPayloadData` object.
 */
export class ItemApiPayloadData {
  /**
   * The definition of `ItemApiPayloadDataAttributes` object.
   */
  "attributes"?: ItemApiPayloadDataAttributes;
  /**
   * The `ItemApiPayloadData` `id`.
   */
  "id"?: string;
  /**
   * Items resource type.
   */
  "type": ItemApiPayloadDataType;
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
      type: "ItemApiPayloadDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ItemApiPayloadDataType",
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
    return ItemApiPayloadData.attributeTypeMap;
  }

  public constructor() {}
}
