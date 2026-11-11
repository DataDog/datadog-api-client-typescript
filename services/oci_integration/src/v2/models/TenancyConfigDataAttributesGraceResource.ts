import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Access control details for the tenancy configuration, used to determine whether the requesting user can edit it.
 */
export class TenancyConfigDataAttributesGraceResource {
  /**
   * The identifier of the access control resource for the tenancy configuration.
   */
  "resourceId"?: string;
  /**
   * Whether the requesting user has permission to edit the tenancy configuration.
   */
  "userCanEdit"?: boolean;
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
    resourceId: {
      baseName: "resource_id",
      type: "string",
    },
    userCanEdit: {
      baseName: "user_can_edit",
      type: "boolean",
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
    return TenancyConfigDataAttributesGraceResource.attributeTypeMap;
  }

  public constructor() {}
}
