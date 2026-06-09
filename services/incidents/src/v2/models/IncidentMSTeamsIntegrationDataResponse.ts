import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentMicrosoftTeamsIntegrationType } from "./IncidentMicrosoftTeamsIntegrationType";
import { IncidentMSTeamsIntegrationDataAttributes } from "./IncidentMSTeamsIntegrationDataAttributes";

/**
 * Microsoft Teams integration data in a response.
 */
export class IncidentMSTeamsIntegrationDataResponse {
  /**
   * Attributes of a Microsoft Teams integration metadata.
   */
  "attributes": IncidentMSTeamsIntegrationDataAttributes;
  /**
   * The integration identifier.
   */
  "id": string;
  /**
   * Incident integration resource type.
   */
  "type": IncidentMicrosoftTeamsIntegrationType;
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
      type: "IncidentMSTeamsIntegrationDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentMicrosoftTeamsIntegrationType",
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
    return IncidentMSTeamsIntegrationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
