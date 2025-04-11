import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentIntegrationMetadataType } from "./IncidentIntegrationMetadataType";

/**
 * A relationship reference for an integration metadata object.
 */
export class RelationshipToIncidentIntegrationMetadataData {
  /**
   * A unique identifier that represents the integration metadata.
   */
  "id": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentIntegrationMetadataType",
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
    return RelationshipToIncidentIntegrationMetadataData.attributeTypeMap;
  }

  public constructor() {}
}
