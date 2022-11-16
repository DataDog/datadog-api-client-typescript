/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportCreateAttributes } from "./DashboardReportCreateAttributes";
import { DashboardReportType } from "./DashboardReportType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for request body to create a dashboard report.
 */
export class DashboardReportCreate {
  /**
   * Attributes for the dashboard report schema used to create a dashboard report.
   */
  "attributes"?: DashboardReportCreateAttributes;
  /**
   * JSON:API type of the dashboard report.
   */
  "type": DashboardReportType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "DashboardReportCreateAttributes",
    },
    type: {
      baseName: "type",
      type: "DashboardReportType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportCreate.attributeTypeMap;
  }

  public constructor() {}
}
