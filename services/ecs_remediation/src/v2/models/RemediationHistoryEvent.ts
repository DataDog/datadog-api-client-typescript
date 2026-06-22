import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single event in the investigation history.
 */
export class RemediationHistoryEvent {
  /**
   * The type of event.
   */
  "eventType"?: string;
  /**
   * History event ID.
   */
  "id"?: string;
  /**
   * Opaque JSON event body, base64-encoded. Decode and parse according to event_type.
   */
  "payload"?: string;
  /**
   * Event time in epoch milliseconds (64-bit integer encoded as a string).
   */
  "timestampMs"?: string;
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
    eventType: {
      baseName: "event_type",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    payload: {
      baseName: "payload",
      type: "string",
    },
    timestampMs: {
      baseName: "timestamp_ms",
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
    return RemediationHistoryEvent.attributeTypeMap;
  }

  public constructor() {}
}
