import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatcherDataAttributes } from "./WatcherDataAttributes";
import { WatcherDataType } from "./WatcherDataType";

/**
 * Data object representing a session watcher, including their identifier, type, and attributes.
 */
export class WatcherData {
  /**
   * Attributes of a user who has watched a RUM replay session, including contact information and watch statistics.
   */
  "attributes"?: WatcherDataAttributes;
  /**
   * Unique identifier of the watcher user.
   */
  "id"?: string;
  /**
   * Rum replay watcher resource type.
   */
  "type": WatcherDataType;
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
      type: "WatcherDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "WatcherDataType",
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
    return WatcherData.attributeTypeMap;
  }

  public constructor() {}
}
