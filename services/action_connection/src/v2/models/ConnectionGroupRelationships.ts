import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatedByRelationship } from "./CreatedByRelationship";

/**
 * Relationships for a connection group.
 */
export class ConnectionGroupRelationships {
  /**
   * Relationship to the user who created the resource.
   */
  "createdBy"?: CreatedByRelationship;
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
    createdBy: {
      baseName: "created_by",
      type: "CreatedByRelationship",
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
    return ConnectionGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
