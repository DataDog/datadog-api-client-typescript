import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatedByRelationshipData } from "./CreatedByRelationshipData";

/**
 * Relationship to the user who created the resource.
 */
export class CreatedByRelationship {
  /**
   * Data for the created_by relationship.
   */
  "data"?: CreatedByRelationshipData;
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
      type: "CreatedByRelationshipData",
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
    return CreatedByRelationship.attributeTypeMap;
  }

  public constructor() {}
}
