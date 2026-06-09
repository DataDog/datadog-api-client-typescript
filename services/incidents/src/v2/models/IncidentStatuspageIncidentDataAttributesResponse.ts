import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatuspageIncidentEntry } from "./IncidentStatuspageIncidentEntry";

/**
 * Attributes of a Statuspage incident integration.
 */
export class IncidentStatuspageIncidentDataAttributesResponse {
  /**
   * Timestamp when the integration was created.
   */
  "created": Date;
  /**
   * List of Statuspage incidents.
   */
  "incidents"?: Array<IncidentStatuspageIncidentEntry>;
  /**
   * The type of integration.
   */
  "integrationType": string;
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
    incidents: {
      baseName: "incidents",
      type: "Array<IncidentStatuspageIncidentEntry>",
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
    return IncidentStatuspageIncidentDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
