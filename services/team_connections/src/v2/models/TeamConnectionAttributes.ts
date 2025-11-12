import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the team connection.
 */
export class TeamConnectionAttributes {
  /**
   * The entity that manages this team connection.
   */
  "managedBy"?: string;
  /**
   * The name of the external source.
   */
  "source"?: string;
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
    managedBy: {
      baseName: "managed_by",
      type: "string",
    },
    source: {
      baseName: "source",
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
    return TeamConnectionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
