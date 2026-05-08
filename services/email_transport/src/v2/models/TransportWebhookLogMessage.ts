import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TransportWebhookLogMessageAuth } from "./TransportWebhookLogMessageAuth";
import { TransportWebhookLogMessageCustomArgs } from "./TransportWebhookLogMessageCustomArgs";
import { TransportWebhookLogMessageId } from "./TransportWebhookLogMessageId";
import { TransportWebhookLogMessageResponse } from "./TransportWebhookLogMessageResponse";
import { TransportWebhookLogMessageTimestamp } from "./TransportWebhookLogMessageTimestamp";

/**
 * The message delivery event details.
 */
export class TransportWebhookLogMessage {
  /**
   * The message authentication details.
   */
  "auth"?: TransportWebhookLogMessageAuth;
  /**
   * Custom arguments passed through the email transport provider for tracking.
   */
  "customArgs"?: TransportWebhookLogMessageCustomArgs;
  /**
   * The message identifiers.
   */
  "id"?: TransportWebhookLogMessageId;
  /**
   * The delivery event type emitted by the transport provider (for example, "delivered", "dropped", "bounced").
   */
  "name"?: string;
  /**
   * The SMTP response information.
   */
  "response"?: TransportWebhookLogMessageResponse;
  /**
   * The IP address of the sending server.
   */
  "senderIp"?: string;
  /**
   * The message delivery timing information.
   */
  "timestamp"?: TransportWebhookLogMessageTimestamp;
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
    auth: {
      baseName: "auth",
      type: "TransportWebhookLogMessageAuth",
    },
    customArgs: {
      baseName: "custom_args",
      type: "TransportWebhookLogMessageCustomArgs",
    },
    id: {
      baseName: "id",
      type: "TransportWebhookLogMessageId",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    response: {
      baseName: "response",
      type: "TransportWebhookLogMessageResponse",
    },
    senderIp: {
      baseName: "sender_ip",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "TransportWebhookLogMessageTimestamp",
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
    return TransportWebhookLogMessage.attributeTypeMap;
  }

  public constructor() {}
}
