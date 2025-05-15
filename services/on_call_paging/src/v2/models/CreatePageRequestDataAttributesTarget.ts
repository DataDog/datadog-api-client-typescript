import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about the target to notify (such as a team or user).
 */
export class CreatePageRequestDataAttributesTarget {
  /**
   * A unique ID for the target (for example, team handle or user UUID).
   */
  "identifier"?: string;
  /**
   * The kind of target, `team_uuid` | `team_handle` | `user_uuid`.
   */
  "type"?: string;
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
    identifier: {
      baseName: "identifier",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return CreatePageRequestDataAttributesTarget.attributeTypeMap;
  }

  public constructor() {}
}
