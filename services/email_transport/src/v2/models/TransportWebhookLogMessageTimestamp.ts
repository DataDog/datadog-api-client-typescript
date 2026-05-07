import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The message delivery timing information.
 */
export class TransportWebhookLogMessageTimestamp {
  /**
   * The Unix timestamp of the event.
   */
  "eventTimestamp"?: number;
  /**
   * The total delivery time in seconds.
   */
  "lifetime"?: number;
  /**
   * Number of seconds the message spent in the delivery queue.
   */
  "queueTime"?: number;
  /**
   * The scheduled delivery time as a Unix timestamp.
   */
  "scheduledTime"?: number;
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
    eventTimestamp: {
      baseName: "event_timestamp",
      type: "number",
      format: "double",
    },
    lifetime: {
      baseName: "lifetime",
      type: "number",
      format: "double",
    },
    queueTime: {
      baseName: "queue_time",
      type: "number",
      format: "double",
    },
    scheduledTime: {
      baseName: "scheduled_time",
      type: "number",
      format: "double",
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
    return TransportWebhookLogMessageTimestamp.attributeTypeMap;
  }

  public constructor() {}
}
