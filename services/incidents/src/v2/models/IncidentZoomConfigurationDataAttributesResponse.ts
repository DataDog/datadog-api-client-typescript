import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a Zoom configuration.
 */
export class IncidentZoomConfigurationDataAttributesResponse {
  /**
   * Timestamp when the configuration was created.
   */
  "createdAt": Date;
  /**
   * Whether manual meeting creation is enabled.
   */
  "manualMeetingCreation": boolean;
  /**
   * Whether meeting chat timeline sync is enabled.
   */
  "meetingChatTimelineSync": boolean;
  /**
   * Timestamp when the configuration was last modified.
   */
  "modifiedAt": Date;
  /**
   * Whether post-meeting summary is enabled.
   */
  "postMeetingSummary": boolean;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    manualMeetingCreation: {
      baseName: "manual_meeting_creation",
      type: "boolean",
      required: true,
    },
    meetingChatTimelineSync: {
      baseName: "meeting_chat_timeline_sync",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    postMeetingSummary: {
      baseName: "post_meeting_summary",
      type: "boolean",
      required: true,
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
    return IncidentZoomConfigurationDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
