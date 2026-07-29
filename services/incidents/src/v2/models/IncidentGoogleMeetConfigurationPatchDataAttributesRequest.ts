import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for patching a Google Meet configuration. All fields are optional.
 */
export class IncidentGoogleMeetConfigurationPatchDataAttributesRequest {
  /**
   * Whether to allow manual meeting creation.
   */
  "allowManualMeetingCreation"?: boolean;
  /**
   * Whether to auto-summarize meetings.
   */
  "autoSummarize"?: boolean;
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
    },
    autoSummarize: {
      baseName: "auto_summarize",
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
    return IncidentGoogleMeetConfigurationPatchDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
