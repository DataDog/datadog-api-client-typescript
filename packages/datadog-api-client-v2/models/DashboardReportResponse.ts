/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReport } from "./DashboardReport";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response body when creating, reading, or updating a dashboard report.
 */
export class DashboardReportResponse {
  /**
   * Dashboard report schema.
   */
  "data"?: DashboardReport;

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
      type: "DashboardReport",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportResponse.attributeTypeMap;
  }

  public constructor() {}
}
