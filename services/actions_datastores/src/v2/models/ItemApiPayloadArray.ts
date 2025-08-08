import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ItemApiPayloadData } from "./ItemApiPayloadData";
import { ItemApiPayloadMeta } from "./ItemApiPayloadMeta";

/**
 * The definition of `ItemApiPayloadArray` object.
 */
export class ItemApiPayloadArray {
  /**
   * The `ItemApiPayloadArray` `data`.
   */
  "data": Array<ItemApiPayloadData>;
  /**
   * The definition of `ItemApiPayloadMeta` object.
   */
  "meta"?: ItemApiPayloadMeta;
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
      type: "Array<ItemApiPayloadData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ItemApiPayloadMeta",
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
    return ItemApiPayloadArray.attributeTypeMap;
  }

  public constructor() {}
}
