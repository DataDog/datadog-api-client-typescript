import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Membership attributes relative to the requested team.
 */
export class TeamHierarchyMemberAttributes {
  /**
   * Role on the requested team: admin or member. Null for inherited members.
   */
  "directRole": string | null;
  /**
   * Whether the user belongs directly to the requested team.
   */
  "isDirect": boolean;
  /**
   * Membership provisioner. Null for inherited members.
   */
  "provisionedBy": string | null;
  /**
   * Identifier supplied by the membership provisioner. Null when unavailable or for inherited members.
   */
  "provisionedById": string | null;
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
    directRole: {
      baseName: "direct_role",
      type: "string",
      required: true,
    },
    isDirect: {
      baseName: "is_direct",
      type: "boolean",
      required: true,
    },
    provisionedBy: {
      baseName: "provisioned_by",
      type: "string",
      required: true,
    },
    provisionedById: {
      baseName: "provisioned_by_id",
      type: "string",
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
    return TeamHierarchyMemberAttributes.attributeTypeMap;
  }

  public constructor() {}
}
