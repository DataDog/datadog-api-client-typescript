import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SharedDashboardIncluded } from "./SharedDashboardIncluded";
import { SharedDashboardResponse } from "./SharedDashboardResponse";

/**
 * Response containing shared dashboards for a dashboard.
 */
export class ListSharedDashboardsResponse {
  /**
   * Shared dashboards for the dashboard.
   */
  "data": Array<SharedDashboardResponse>;
  /**
   * Users and dashboards related to the shared dashboards.
   */
  "included": Array<SharedDashboardIncluded>;
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
      type: "Array<SharedDashboardResponse>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<SharedDashboardIncluded>",
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
    return ListSharedDashboardsResponse.attributeTypeMap;
  }

  public constructor() {}
}
