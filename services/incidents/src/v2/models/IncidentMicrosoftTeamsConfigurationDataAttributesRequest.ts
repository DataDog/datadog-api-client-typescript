import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating or updating a Microsoft Teams configuration.
 */
export class IncidentMicrosoftTeamsConfigurationDataAttributesRequest {
  /**
   * Whether manual meeting creation is enabled.
   */
  "manualMeetingCreation"?: boolean;
  /**
   * Whether post-meeting summary is enabled.
   */
  "postMeetingSummary"?: boolean;
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
    manualMeetingCreation: {
      baseName: "manual_meeting_creation",
      type: "boolean",
    },
    postMeetingSummary: {
      baseName: "post_meeting_summary",
      type: "boolean",
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
    return IncidentMicrosoftTeamsConfigurationDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
