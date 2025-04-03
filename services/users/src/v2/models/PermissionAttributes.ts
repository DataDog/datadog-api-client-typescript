import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a permission.
 */
export class PermissionAttributes {
  /**
   * Creation time of the permission.
   */
  "created"?: Date;
  /**
   * Description of the permission.
   */
  "description"?: string;
  /**
   * Displayed name for the permission.
   */
  "displayName"?: string;
  /**
   * Display type.
   */
  "displayType"?: string;
  /**
   * Name of the permission group.
   */
  "groupName"?: string;
  /**
   * Name of the permission.
   */
  "name"?: string;
  /**
   * Whether or not the permission is restricted.
   */
  "restricted"?: boolean;
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
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    displayType: {
      baseName: "display_type",
      type: "string",
    },
    groupName: {
      baseName: "group_name",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    restricted: {
      baseName: "restricted",
      type: "boolean",
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
    return PermissionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
