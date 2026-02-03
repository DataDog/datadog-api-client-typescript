import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatcherDataAttributes } from "./WatcherDataAttributes";
import { WatcherDataType } from "./WatcherDataType";

export class WatcherData {
  "attributes"?: WatcherDataAttributes;
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
