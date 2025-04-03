import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Count of the device interfaces by status
 */
export class DeviceAttributesInterfaceStatuses {
  /**
   * The number of interfaces that are down
   */
  "down"?: number;
  /**
   * The number of interfaces that are off
   */
  "off"?: number;
  /**
   * The number of interfaces that are up
   */
  "up"?: number;
  /**
   * The number of interfaces that are in a warning state
   */
  "warning"?: number;
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
    down: {
      baseName: "down",
      type: "number",
      format: "int64",
    },
    off: {
      baseName: "off",
      type: "number",
      format: "int64",
    },
    up: {
      baseName: "up",
      type: "number",
      format: "int64",
    },
    warning: {
      baseName: "warning",
      type: "number",
      format: "int64",
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
    return DeviceAttributesInterfaceStatuses.attributeTypeMap;
  }

  public constructor() {}
}
