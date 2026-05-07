import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The message authentication details.
 */
export class TransportWebhookLogMessageAuth {
  /**
   * The TLS version or negotiation information.
   */
  "deliveredWithTls"?: string;
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
    deliveredWithTls: {
      baseName: "delivered_with_tls",
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
    return TransportWebhookLogMessageAuth.attributeTypeMap;
  }

  public constructor() {}
}
