import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentIntegrationMetadataAttributes } from "./IncidentIntegrationMetadataAttributes";
import { IncidentIntegrationMetadataType } from "./IncidentIntegrationMetadataType";
import { IncidentIntegrationRelationships } from "./IncidentIntegrationRelationships";

/**
 * Incident integration metadata from a response.
 */
export class IncidentIntegrationMetadataResponseData {
  /**
   * Incident integration metadata's attributes for a create request.
   */
  "attributes"?: IncidentIntegrationMetadataAttributes;
  /**
   * The incident integration metadata's ID.
   */
  "id": string;
  /**
   * The incident's integration relationships from a response.
   */
  "relationships"?: IncidentIntegrationRelationships;
  /**
   * Integration metadata resource type.
   */
  "type": IncidentIntegrationMetadataType;
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
      type: "IncidentIntegrationMetadataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentIntegrationRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentIntegrationMetadataType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentIntegrationMetadataResponseData.attributeTypeMap;
  }

  public constructor() {}
}
