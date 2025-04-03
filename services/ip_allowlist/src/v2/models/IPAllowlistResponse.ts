import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IPAllowlistData } from "./IPAllowlistData";

/**
 * Response containing information about the IP allowlist.
 */
export class IPAllowlistResponse {
  /**
   * IP allowlist data.
   */
  "data"?: IPAllowlistData;
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
    return IPAllowlistResponse.attributeTypeMap;
  }

  public constructor() {}
}
