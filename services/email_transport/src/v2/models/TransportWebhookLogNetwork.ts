import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TransportWebhookLogNetworkIp } from "./TransportWebhookLogNetworkIp";

/**
 * The network information for the event.
 */
export class TransportWebhookLogNetwork {
  /**
   * The IP address information.
   */
  "ip"?: TransportWebhookLogNetworkIp;
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
    ip: {
      baseName: "ip",
      type: "TransportWebhookLogNetworkIp",
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
    return TransportWebhookLogNetwork.attributeTypeMap;
  }

  public constructor() {}
}
