import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatchDataAttributes } from "./WatchDataAttributes";
import { WatchDataType } from "./WatchDataType";

/**
 * Data object representing a session watch record, including its identifier, type, and attributes.
 */
export class WatchData {
  /**
   * Attributes for recording a session watch event, including the application, event reference, and timestamp.
   */
  "attributes"?: WatchDataAttributes;
  /**
   * Unique identifier of the watch record.
   */
  "id"?: string;
  /**
   * Rum replay watch resource type.
   */
  "type": WatchDataType;
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
      type: "WatchDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "WatchDataType",
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
    return WatchData.attributeTypeMap;
  }

  public constructor() {}
}
