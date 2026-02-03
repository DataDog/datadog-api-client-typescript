import { AttributeTypeMap } from "@datadog/datadog-api-client";

export class ViewershipHistorySessionDataAttributes {
  "eventId"?: string;
  "lastWatchedAt": Date;
  "sessionEvent"?: { [key: string]: any };
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
