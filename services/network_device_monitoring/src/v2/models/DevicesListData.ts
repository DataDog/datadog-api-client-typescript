import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeviceAttributes } from "./DeviceAttributes";

/**
 * The devices list data
 */
export class DevicesListData {
  /**
   * The device attributes
   */
  "attributes"?: DeviceAttributes;
  /**
   * The device ID
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be device.
   */
  "type"?: string;
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
      type: "DeviceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return DevicesListData.attributeTypeMap;
  }

  public constructor() {}
}
