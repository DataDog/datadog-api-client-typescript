/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportRelationshipsDashboardData } from "./DashboardReportRelationshipsDashboardData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Dashboard associated with the report.
 */
export class DashboardReportRelationshipsDashboard {
  /**
   * JSON:API data representing a report's associated dashboard.
   */
  "data": DashboardReportRelationshipsDashboardData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "DashboardReportRelationshipsDashboardData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportRelationshipsDashboard.attributeTypeMap;
  }

  public constructor() {}
}
