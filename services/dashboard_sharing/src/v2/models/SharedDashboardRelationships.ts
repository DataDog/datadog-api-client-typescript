import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SharedDashboardRelationshipDashboard } from "./SharedDashboardRelationshipDashboard";
import { SharedDashboardRelationshipSharer } from "./SharedDashboardRelationshipSharer";

/**
 * Relationships of a shared dashboard.
 */
export class SharedDashboardRelationships {
  /**
   * Dashboard associated with the shared dashboard.
   */
  "dashboard": SharedDashboardRelationshipDashboard;
  /**
   * User who shared the dashboard.
   */
  "sharer": SharedDashboardRelationshipSharer;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dashboard: {
      baseName: "dashboard",
      type: "SharedDashboardRelationshipDashboard",
      required: true,
    },
    sharer: {
      baseName: "sharer",
      type: "SharedDashboardRelationshipSharer",
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
    return SharedDashboardRelationships.attributeTypeMap;
  }

  public constructor() {}
}
