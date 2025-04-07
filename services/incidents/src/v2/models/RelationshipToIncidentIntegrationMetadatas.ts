import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentIntegrationMetadataData } from "./RelationshipToIncidentIntegrationMetadataData";

/**
 * A relationship reference for multiple integration metadata objects.
 */
export class RelationshipToIncidentIntegrationMetadatas {
  /**
   * Integration metadata relationship array
   */
  "data": Array<RelationshipToIncidentIntegrationMetadataData>;
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
    data: {
      baseName: "data",
      type: "Array<RelationshipToIncidentIntegrationMetadataData>",
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
    return RelationshipToIncidentIntegrationMetadatas.attributeTypeMap;
  }

  public constructor() {}
}
