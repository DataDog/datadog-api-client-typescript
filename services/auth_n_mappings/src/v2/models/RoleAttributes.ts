import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the role.
 */
export class RoleAttributes {
  /**
   * Creation time of the role.
   */
  "createdAt"?: Date;
  /**
   * Time of last role modification.
   */
  "modifiedAt"?: Date;
  /**
   * The name of the role. The name is neither unique nor a stable identifier of the role.
   */
  "name"?: string;
  /**
   * Number of users with that role.
   */
  "userCount"?: number;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    userCount: {
      baseName: "user_count",
      type: "number",
      format: "int64",
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
    return RoleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
