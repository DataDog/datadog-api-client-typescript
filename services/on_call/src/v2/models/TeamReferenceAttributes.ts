import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Encapsulates the basic attributes of a Team reference, such as name, handle, and an optional avatar or description.
 */
export class TeamReferenceAttributes {
  /**
   * URL or reference for the team's avatar (if available).
   */
  "avatar"?: string;
  /**
   * A short text describing the team.
   */
  "description"?: string;
  /**
   * A unique handle/slug for the team.
   */
  "handle"?: string;
  /**
   * The full, human-readable name of the team.
   */
  "name"?: string;
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
    avatar: {
      baseName: "avatar",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return TeamReferenceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
