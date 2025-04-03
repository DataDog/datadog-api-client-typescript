import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetDeviceAttributes } from "./GetDeviceAttributes";

/**
 * Get device response data.
 */
export class GetDeviceData {
  /**
   * The device attributes
   */
  "attributes"?: GetDeviceAttributes;
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
      type: "GetDeviceAttributes",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GetDeviceData.attributeTypeMap;
  }

  public constructor() {}
}
