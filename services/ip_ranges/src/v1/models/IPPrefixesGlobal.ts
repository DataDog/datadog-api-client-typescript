import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Available prefix information for all Datadog endpoints.
 */
export class IPPrefixesGlobal {
  /**
   * List of IPv4 prefixes.
   */
  "prefixesIpv4"?: Array<string>;
  /**
   * List of IPv6 prefixes.
   */
  "prefixesIpv6"?: Array<string>;
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
    prefixesIpv4: {
      baseName: "prefixes_ipv4",
      type: "Array<string>",
    },
    prefixesIpv6: {
      baseName: "prefixes_ipv6",
      type: "Array<string>",
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
    return IPPrefixesGlobal.attributeTypeMap;
  }

  public constructor() {}
}
