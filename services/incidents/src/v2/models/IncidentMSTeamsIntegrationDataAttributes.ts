import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentMSTeamsChannel } from "./IncidentMSTeamsChannel";

/**
 * Attributes of a Microsoft Teams integration metadata.
 */
export class IncidentMSTeamsIntegrationDataAttributes {
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
   * The status of the integration.
   */
  "status": string;
  /**
   * List of Microsoft Teams channels.
   */
  "teams": Array<IncidentMSTeamsChannel>;
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
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    teams: {
      baseName: "teams",
      type: "Array<IncidentMSTeamsChannel>",
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
    return IncidentMSTeamsIntegrationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
