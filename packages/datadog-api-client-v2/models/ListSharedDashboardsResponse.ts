/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardIncluded } from "./SharedDashboardIncluded";
import { SharedDashboardResponse } from "./SharedDashboardResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
