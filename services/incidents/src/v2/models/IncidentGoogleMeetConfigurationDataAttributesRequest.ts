import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a Google Meet configuration.
 */
export class IncidentGoogleMeetConfigurationDataAttributesRequest {
  /**
   * Whether to allow manual meeting creation.
   */
  "allowManualMeetingCreation": boolean;
  /**
   * Whether to auto-summarize meetings.
   */
  "autoSummarize": boolean;
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
    allowManualMeetingCreation: {
      baseName: "allow_manual_meeting_creation",
      type: "boolean",
      required: true,
    },
    autoSummarize: {
      baseName: "auto_summarize",
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
    return IncidentGoogleMeetConfigurationDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
