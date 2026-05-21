import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentCreateZoomMeetingDataAttributes } from "./IncidentCreateZoomMeetingDataAttributes";
import { IncidentZoomIntegrationType } from "./IncidentZoomIntegrationType";

/**
 * Data for creating a Zoom meeting.
 */
export class IncidentCreateZoomMeetingData {
  /**
   * Attributes for creating a Zoom meeting.
   */
  "attributes": IncidentCreateZoomMeetingDataAttributes;
  /**
   * Incident integration resource type.
   */
  "type": IncidentZoomIntegrationType;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentCreateZoomMeetingDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentZoomIntegrationType",
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
    return IncidentCreateZoomMeetingData.attributeTypeMap;
  }

  public constructor() {}
}
