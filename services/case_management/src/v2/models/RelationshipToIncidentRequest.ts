import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRelationshipData } from "./IncidentRelationshipData";

/**
 * Relationship to incident request
 */
export class RelationshipToIncidentRequest {
  /**
   * Incident relationship data
   */
  "data": IncidentRelationshipData;
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
      type: "IncidentRelationshipData",
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
    return RelationshipToIncidentRequest.attributeTypeMap;
  }

  public constructor() {}
}
