import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeviceDetailsData } from "./DeviceDetailsData";

/**
 * Response body for the get device endpoint, returning a single device with full attribute detail.
 */
export class DeviceDetails {
  /**
   * A single device entry with full attribute detail.
   */
  "data"?: DeviceDetailsData;
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
      type: "DeviceDetailsData",
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
    return DeviceDetails.attributeTypeMap;
  }

  public constructor() {}
}
