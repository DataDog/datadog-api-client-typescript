import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IPAllowlistEntry } from "./IPAllowlistEntry";

/**
 * Attributes of the IP allowlist.
 */
export class IPAllowlistAttributes {
  /**
   * Whether the IP allowlist logic is enabled or not.
   */
  "enabled"?: boolean;
  /**
   * Array of entries in the IP allowlist.
   */
  "entries"?: Array<IPAllowlistEntry>;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    entries: {
      baseName: "entries",
      type: "Array<IPAllowlistEntry>",
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
    return IPAllowlistAttributes.attributeTypeMap;
  }

  public constructor() {}
}
