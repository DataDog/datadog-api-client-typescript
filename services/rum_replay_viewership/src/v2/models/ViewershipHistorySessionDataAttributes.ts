import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a viewership history session entry, capturing when it was last watched and the associated event data.
 */
export class ViewershipHistorySessionDataAttributes {
  /**
   * Unique identifier of the RUM event associated with the watched session.
   */
  "eventId"?: string;
  /**
   * Timestamp when the session was last watched by the user.
   */
  "lastWatchedAt": Date;
  /**
   * Raw event data associated with the replay session.
   */
  "sessionEvent"?: { [key: string]: any };
  /**
   * Replay track identifier indicating which recording track the session belongs to.
   */
  "track"?: string;
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
    eventId: {
      baseName: "event_id",
      type: "string",
    },
    lastWatchedAt: {
      baseName: "last_watched_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    sessionEvent: {
      baseName: "session_event",
      type: "{ [key: string]: any; }",
    },
    track: {
      baseName: "track",
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
    return ViewershipHistorySessionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
