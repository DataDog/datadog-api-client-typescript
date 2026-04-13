import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an org group membership.
 */
export class OrgGroupMembershipAttributes {
  /**
   * Timestamp when the membership was created.
   */
  "createdAt": Date;
  /**
   * Timestamp when the membership was last modified.
   */
  "modifiedAt": Date;
  /**
   * The name of the member organization.
   */
  "orgName": string;
  /**
   * The site of the member organization.
   */
  "orgSite": string;
  /**
   * The UUID of the member organization.
   */
  "orgUuid": string;
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
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
      required: true,
    },
    orgSite: {
      baseName: "org_site",
      type: "string",
      required: true,
    },
    orgUuid: {
      baseName: "org_uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return OrgGroupMembershipAttributes.attributeTypeMap;
  }

  public constructor() {}
}
