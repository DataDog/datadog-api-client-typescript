import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Links related to the current page of devices.
 */
export class DeviceBaseArrayLinks {
  /**
   * URL of the next page of devices. Present only when more devices remain.
   */
  "next"?: string;
  /**
   * URL of the current request.
   */
  "self"?: string;
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
    next: {
      baseName: "next",
      type: "string",
    },
    self: {
      baseName: "self",
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
    return DeviceBaseArrayLinks.attributeTypeMap;
  }

  public constructor() {}
}
