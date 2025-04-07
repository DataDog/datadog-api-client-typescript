import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentImpactData } from "./RelationshipToIncidentImpactData";

/**
 * Relationship to impacts.
 */
export class RelationshipToIncidentImpacts {
  /**
   * An array of incident impacts.
   */
  "data": Array<RelationshipToIncidentImpactData>;
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
      type: "Array<RelationshipToIncidentImpactData>",
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
    return RelationshipToIncidentImpacts.attributeTypeMap;
  }

  public constructor() {}
}
