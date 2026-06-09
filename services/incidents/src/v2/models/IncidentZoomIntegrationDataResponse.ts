import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentZoomIntegrationDataAttributes } from "./IncidentZoomIntegrationDataAttributes";
import { IncidentZoomIntegrationType } from "./IncidentZoomIntegrationType";

/**
 * Zoom integration data in a response.
 */
export class IncidentZoomIntegrationDataResponse {
  /**
   * Attributes of a Zoom integration metadata.
   */
  "attributes": IncidentZoomIntegrationDataAttributes;
  /**
   * The integration identifier.
   */
  "id": string;
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
      type: "IncidentZoomIntegrationDataAttributes",
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
    return IncidentZoomIntegrationDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
