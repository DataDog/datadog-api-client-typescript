import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IPAllowlistData } from "./IPAllowlistData";

/**
 * Update the IP allowlist.
 */
export class IPAllowlistUpdateRequest {
  /**
   * IP allowlist data.
   */
  "data": IPAllowlistData;
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
      type: "IPAllowlistData",
      required: true,
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
    return IPAllowlistUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
