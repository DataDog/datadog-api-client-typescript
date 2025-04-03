import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the created role.
 */
export class RoleCreateAttributes {
  /**
   * Creation time of the role.
   */
  "createdAt"?: Date;
  /**
   * Time of last role modification.
   */
  "modifiedAt"?: Date;
  /**
   * Name of the role.
   */
  "name": string;
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
    return RoleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
