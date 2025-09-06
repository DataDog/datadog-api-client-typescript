import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ItemApiPayloadData } from "./ItemApiPayloadData";

/**
 * A single datastore item with its content and metadata.
 */
export class ItemApiPayload {
  /**
   * Core data and metadata for a single datastore item.
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
