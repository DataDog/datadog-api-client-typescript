import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a Zoom meeting.
 */
export class IncidentCreateZoomMeetingDataAttributes {
  /**
   * The topic of the Zoom meeting.
   */
  "topic": string;
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
    topic: {
      baseName: "topic",
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
    return IncidentCreateZoomMeetingDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
