/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportResourceType } from "./DashboardReportResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API data representing a report's associated dashboard.
 */
export class DashboardReportRelationshipsDashboardData {
  /**
   * ID of a report's associated dashboard. Screenboards (dashboards with layout_type=FREE) are not supported.
   */
  "id": string;
  /**
   * JSON:API type of the report's associated dashboard.
   */
  "type": DashboardReportResourceType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DashboardReportResourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportRelationshipsDashboardData.attributeTypeMap;
  }

  public constructor() {}
}
