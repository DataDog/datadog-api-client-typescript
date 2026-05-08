import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The message identifiers.
 */
export class TransportWebhookLogMessageId {
  /**
   * The RFC 5322 Message-ID.
   */
  "messageId"?: string;
  /**
   * The SMTP transaction identifier.
   */
  "smtpId"?: string;
  /**
   * The transport provider event identifier.
   */
  "transportEventId"?: string;
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
    messageId: {
      baseName: "message_id",
      type: "string",
    },
    smtpId: {
      baseName: "smtp_id",
      type: "string",
    },
    transportEventId: {
      baseName: "transport_event_id",
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
    return TransportWebhookLogMessageId.attributeTypeMap;
  }

  public constructor() {}
}
