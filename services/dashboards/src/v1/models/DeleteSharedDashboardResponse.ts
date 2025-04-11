import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response containing token of deleted shared dashboard.
 */
export class DeleteSharedDashboardResponse {
  /**
   * Token associated with the shared dashboard that was revoked.
   */
  "deletedPublicDashboardToken"?: string;
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
    deletedPublicDashboardToken: {
      baseName: "deleted_public_dashboard_token",
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
    return DeleteSharedDashboardResponse.attributeTypeMap;
  }

  public constructor() {}
}
