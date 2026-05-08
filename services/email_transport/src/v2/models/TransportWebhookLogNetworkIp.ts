import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TransportWebhookLogIpAttribute } from "./TransportWebhookLogIpAttribute";

/**
 * The IP address information.
 */
export class TransportWebhookLogNetworkIp {
  /**
   * Per-IP attribute records, each pairing an IP address with the providers that observed it.
   */
  "attributes"?: Array<TransportWebhookLogIpAttribute>;
  /**
   * The list of IP addresses.
   */
  "list"?: Array<string>;
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
    attributes: {
      baseName: "attributes",
      type: "Array<TransportWebhookLogIpAttribute>",
    },
    list: {
      baseName: "list",
      type: "Array<string>",
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
    return TransportWebhookLogNetworkIp.attributeTypeMap;
  }

  public constructor() {}
}
