import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetDeviceData } from "./GetDeviceData";

/**
 * The `GetDevice` operation's response.
 */
export class GetDeviceResponse {
  /**
   * Get device response data.
   */
  "data"?: GetDeviceData;
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
      type: "GetDeviceData",
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
    return GetDeviceResponse.attributeTypeMap;
  }

  public constructor() {}
}
