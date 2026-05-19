/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardUsage } from "./DashboardUsage";
import { ListDashboardsUsageResponseLinks } from "./ListDashboardsUsageResponseLinks";
import { ListDashboardsUsageResponseMeta } from "./ListDashboardsUsageResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Paginated list of dashboard usage records.
 */
export class ListDashboardsUsageResponse {
  /**
   * Dashboard usage records, one per dashboard in the caller's organization.
   */
  "data": Array<DashboardUsage>;
  /**
   * Pagination links for a list of dashboard usage records.
   */
  "links"?: ListDashboardsUsageResponseLinks;
  /**
   * Pagination metadata for a list of dashboard usage records.
   */
  "meta": ListDashboardsUsageResponseMeta;

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
      type: "Array<DashboardUsage>",
      required: true,
    },
    links: {
      baseName: "links",
      type: "ListDashboardsUsageResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ListDashboardsUsageResponseMeta",
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
    return ListDashboardsUsageResponse.attributeTypeMap;
  }

  public constructor() {}
}
