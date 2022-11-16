/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportRelationshipsDashboard } from "./DashboardReportRelationshipsDashboard";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of a dashboard report.
 */
export class DashboardReportRelationships {
  /**
   * Dashboard associated with the report.
   */
  "dashboard"?: DashboardReportRelationshipsDashboard;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dashboard: {
      baseName: "dashboard",
      type: "DashboardReportRelationshipsDashboard",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportRelationships.attributeTypeMap;
  }

  public constructor() {}
}
