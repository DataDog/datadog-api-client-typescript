import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeviceBaseDataAttributes } from "./DeviceBaseDataAttributes";
import { DeviceDetailsDataType } from "./DeviceDetailsDataType";

/**
 * A single device entry as returned by the list devices endpoint.
 */
export class DeviceBaseData {
  /**
   * Common health and identity attributes shared by every End User Device Monitoring device record.
   */
  "attributes"?: DeviceBaseDataAttributes;
  /**
   * Unique identifier of the device. Matches the Datadog host identifier.
   */
  "id": string;
  /**
   * Devices resource type.
   */
  "type": DeviceDetailsDataType;
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
      type: "DeviceBaseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeviceDetailsDataType",
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
    return DeviceBaseData.attributeTypeMap;
  }

  public constructor() {}
}
