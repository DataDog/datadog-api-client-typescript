import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ItemApiPayloadData } from "./ItemApiPayloadData";
import { ItemApiPayloadMeta } from "./ItemApiPayloadMeta";

/**
 * A collection of datastore items with pagination and schema metadata.
 */
export class ItemApiPayloadArray {
  /**
   * An array of datastore items with their content and metadata.
   */
  "data": Array<ItemApiPayloadData>;
  /**
   * Additional metadata about a collection of datastore items, including pagination and schema information.
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
