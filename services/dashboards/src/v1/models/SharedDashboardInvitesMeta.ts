import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SharedDashboardInvitesMetaPage } from "./SharedDashboardInvitesMetaPage";

/**
 * Pagination metadata returned by the API.
 */
export class SharedDashboardInvitesMeta {
  /**
   * Object containing the total count of invitations across all pages
   */
  "page"?: SharedDashboardInvitesMetaPage;
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
    page: {
      baseName: "page",
      type: "SharedDashboardInvitesMetaPage",
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
    return SharedDashboardInvitesMeta.attributeTypeMap;
  }

  public constructor() {}
}
