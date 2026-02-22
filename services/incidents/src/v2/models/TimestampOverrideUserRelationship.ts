import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimestampOverrideUserRelationshipData } from "./TimestampOverrideUserRelationshipData";

/**
 * Relationship to a user.
 */
export class TimestampOverrideUserRelationship {
  /**
   * User relationship data.
   */
  "data": TimestampOverrideUserRelationshipData;
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
      type: "TimestampOverrideUserRelationshipData",
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
    return TimestampOverrideUserRelationship.attributeTypeMap;
  }

  public constructor() {}
}
