import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentZoomMeeting } from "./IncidentZoomMeeting";

/**
 * Attributes of a Zoom integration metadata.
 */
export class IncidentZoomIntegrationDataAttributes {
  /**
   * Timestamp when the integration was created.
   */
  "created": Date;
  /**
   * The type of integration.
   */
  "integrationType": string;
  /**
   * List of Zoom meetings.
   */
  "meetings": Array<IncidentZoomMeeting>;
  /**
   * Timestamp when the integration was last modified.
   */
  "modified": Date;
  /**
   * The status of the integration.
   */
  "status": string;
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
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    integrationType: {
      baseName: "integration_type",
      type: "string",
      required: true,
    },
    meetings: {
      baseName: "meetings",
      type: "Array<IncidentZoomMeeting>",
      required: true,
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    status: {
      baseName: "status",
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
    return IncidentZoomIntegrationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
