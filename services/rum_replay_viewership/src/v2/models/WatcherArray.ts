import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatcherData } from "./WatcherData";

/**
 * A list of users who have watched a RUM replay session.
 */
export class WatcherArray {
  /**
   * Array of watcher data objects.
   */
  "data": Array<WatcherData>;
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
      type: "Array<WatcherData>",
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
    return WatcherArray.attributeTypeMap;
  }

  public constructor() {}
}
