import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the restriction query.
 */
export class RestrictionQueryAttributes {
  /**
   * Creation time of the restriction query.
   */
  "createdAt"?: Date;
  /**
   * Email of the user who last modified this restriction query.
   */
  "lastModifierEmail"?: string;
  /**
   * Name of the user who last modified this restriction query.
   */
  "lastModifierName"?: string;
  /**
   * Time of last restriction query modification.
   */
  "modifiedAt"?: Date;
  /**
   * The query that defines the restriction. Only the content matching the query can be returned.
   */
  "restrictionQuery"?: string;
  /**
   * Number of roles associated with this restriction query.
   */
  "roleCount"?: number;
  /**
   * Number of users associated with this restriction query.
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
    lastModifierEmail: {
      baseName: "last_modifier_email",
      type: "string",
    },
    lastModifierName: {
      baseName: "last_modifier_name",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    restrictionQuery: {
      baseName: "restriction_query",
      type: "string",
    },
    roleCount: {
      baseName: "role_count",
      type: "number",
      format: "int64",
    },
    userCount: {
      baseName: "user_count",
      type: "number",
      format: "int64",
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
    return RestrictionQueryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
