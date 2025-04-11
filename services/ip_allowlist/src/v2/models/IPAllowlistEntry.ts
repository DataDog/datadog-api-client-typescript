import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IPAllowlistEntryData } from "./IPAllowlistEntryData";

/**
 * IP allowlist entry object.
 */
export class IPAllowlistEntry {
  /**
   * Data of the IP allowlist entry object.
   */
  "data": IPAllowlistEntryData;
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
      type: "IPAllowlistEntryData",
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
    return IPAllowlistEntry.attributeTypeMap;
  }

  public constructor() {}
}
