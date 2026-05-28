import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeviceBaseData } from "./DeviceBaseData";

/**
 * Response body for the list devices endpoint.
 */
export class DeviceBaseArray {
  /**
   * List of devices matching the request.
   */
  "data": Array<DeviceBaseData>;
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
      type: "Array<DeviceBaseData>",
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
    return DeviceBaseArray.attributeTypeMap;
  }

  public constructor() {}
}
