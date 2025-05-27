import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamReferenceAttributes } from "./TeamReferenceAttributes";
import { TeamReferenceType } from "./TeamReferenceType";

/**
 * Provides a reference to a team, including ID, type, and basic attributes/relationships.
 */
export class TeamReference {
  /**
   * Encapsulates the basic attributes of a Team reference, such as name, handle, and an optional avatar or description.
   */
  "attributes"?: TeamReferenceAttributes;
  /**
   * The team's unique identifier.
   */
  "id"?: string;
  /**
   * Teams resource type.
   */
  "type": TeamReferenceType;
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
      type: "TeamReferenceAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TeamReferenceType",
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
    return TeamReference.attributeTypeMap;
  }

  public constructor() {}
}
