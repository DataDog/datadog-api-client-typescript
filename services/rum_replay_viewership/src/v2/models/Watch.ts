import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatchData } from "./WatchData";

/**
 * A single RUM replay session watch resource returned by create operations.
 */
export class Watch {
  /**
   * Data object representing a session watch record, including its identifier, type, and attributes.
   */
  "data": WatchData;
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
      type: "WatchData",
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
    return Watch.attributeTypeMap;
  }

  public constructor() {}
}
