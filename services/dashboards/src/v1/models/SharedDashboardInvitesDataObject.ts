import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardInviteType } from "./DashboardInviteType";
import { SharedDashboardInvitesDataObjectAttributes } from "./SharedDashboardInvitesDataObjectAttributes";

/**
 * Object containing the information for an invitation to a shared dashboard.
 */
export class SharedDashboardInvitesDataObject {
  /**
   * Attributes of the shared dashboard invitation
   */
  "attributes": SharedDashboardInvitesDataObjectAttributes;
  /**
   * Type for shared dashboard invitation request body.
   */
  "type": DashboardInviteType;
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
    attributes: {
      baseName: "attributes",
      type: "SharedDashboardInvitesDataObjectAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DashboardInviteType",
      required: true,
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
    return SharedDashboardInvitesDataObject.attributeTypeMap;
  }

  public constructor() {}
}
