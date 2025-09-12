import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GcpUcConfigResponseData } from "./GcpUcConfigResponseData";

/**
 * The definition of `GcpUcConfigResponse` object.
 */
export class GcpUcConfigResponse {
  /**
   * The definition of `GcpUcConfigResponseData` object.
   */
  "data"?: GcpUcConfigResponseData;
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
      type: "GcpUcConfigResponseData",
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
    return GcpUcConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
