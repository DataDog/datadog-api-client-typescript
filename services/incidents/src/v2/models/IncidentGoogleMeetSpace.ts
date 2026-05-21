import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A Google Meet space associated with an incident.
 */
export class IncidentGoogleMeetSpace {
  /**
   * The URL to join the Google Meet space.
   */
  "joinUrl": string;
  /**
   * The meeting code for the space.
   */
  "meetingCode": string;
  /**
   * The name of the Google Meet space.
   */
  "name": string;
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
    joinUrl: {
      baseName: "join_url",
      type: "string",
      required: true,
    },
    meetingCode: {
      baseName: "meeting_code",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
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
    return IncidentGoogleMeetSpace.attributeTypeMap;
  }

  public constructor() {}
}
