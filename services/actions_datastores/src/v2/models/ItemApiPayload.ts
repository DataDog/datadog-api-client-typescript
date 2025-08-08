import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ItemApiPayloadData } from "./ItemApiPayloadData";

/**
 * The definition of `ItemApiPayload` object.
 */
export class ItemApiPayload {
  /**
   * The definition of `ItemApiPayloadData` object.
   */
  "data"?: ItemApiPayloadData;
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
    data: {
      baseName: "data",
      type: "ItemApiPayloadData",
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
    return ItemApiPayload.attributeTypeMap;
  }

  public constructor() {}
}
