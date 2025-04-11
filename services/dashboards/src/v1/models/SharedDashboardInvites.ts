import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SharedDashboardInvitesData } from "./SharedDashboardInvitesData";
import { SharedDashboardInvitesMeta } from "./SharedDashboardInvitesMeta";

/**
 * Invitations data and metadata that exists for a shared dashboard returned by the API.
 */
export class SharedDashboardInvites {
  /**
   * An object or list of objects containing the information for an invitation to a shared dashboard.
   */
  "data": SharedDashboardInvitesData;
  /**
   * Pagination metadata returned by the API.
   */
  "meta"?: SharedDashboardInvitesMeta;
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
    data: {
      baseName: "data",
      type: "SharedDashboardInvitesData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SharedDashboardInvitesMeta",
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
    return SharedDashboardInvites.attributeTypeMap;
  }

  public constructor() {}
}
