import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentGoogleMeetSpace } from "./IncidentGoogleMeetSpace";

/**
 * Attributes of a Google Meet integration metadata.
 */
export class IncidentGoogleMeetIntegrationDataAttributes {
  /**
   * Timestamp when the integration was created.
   */
  "created": Date;
  /**
   * The type of integration.
   */
  "integrationType": string;
  /**
   * Timestamp when the integration was last modified.
   */
  "modified": Date;
  /**
   * List of Google Meet spaces.
   */
  "spaces": Array<IncidentGoogleMeetSpace>;
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
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    spaces: {
      baseName: "spaces",
      type: "Array<IncidentGoogleMeetSpace>",
      required: true,
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
    return IncidentGoogleMeetIntegrationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
