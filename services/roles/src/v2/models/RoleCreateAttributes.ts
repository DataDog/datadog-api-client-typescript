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
   * The managed role from which this role automatically inherits new permissions.
   * Specify one of the following: "Datadog Admin Role", "Datadog Standard Role", or "Datadog Read Only Role".
   * If empty or not specified, the role does not automatically inherit permissions from any managed role.
   */
  "receivesPermissionsFrom"?: Array<string>;
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
    receivesPermissionsFrom: {
      baseName: "receives_permissions_from",
      type: "Array<string>",
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
    return RoleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
