import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Team hierarchy link attributes
 */
export class TeamHierarchyLinkAttributes {
  /**
   * Timestamp when the team hierarchy link was created
   */
  "createdAt": Date;
  /**
   * The provisioner of the team hierarchy link
   */
  "provisionedBy": string;
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
    provisionedBy: {
      baseName: "provisioned_by",
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
    return TeamHierarchyLinkAttributes.attributeTypeMap;
  }

  public constructor() {}
}
