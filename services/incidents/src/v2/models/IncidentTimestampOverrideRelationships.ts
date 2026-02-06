import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimestampOverrideUserRelationship } from "./TimestampOverrideUserRelationship";

/**
 * Relationships for incident timestamp override.
 */
export class IncidentTimestampOverrideRelationships {
  /**
   * Relationship to a user.
   */
  "createdByUser": TimestampOverrideUserRelationship;
  /**
   * Relationship to a user.
   */
  "lastModifiedByUser": TimestampOverrideUserRelationship;
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
    createdByUser: {
      baseName: "created_by_user",
      type: "TimestampOverrideUserRelationship",
      required: true,
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "TimestampOverrideUserRelationship",
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
    return IncidentTimestampOverrideRelationships.attributeTypeMap;
  }

  public constructor() {}
}
