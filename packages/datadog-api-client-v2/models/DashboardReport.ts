/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportAttributes } from "./DashboardReportAttributes";
import { DashboardReportRelationships } from "./DashboardReportRelationships";
import { DashboardReportType } from "./DashboardReportType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Dashboard report schema.
 */
export class DashboardReport {
  /**
   * Attributes for the dashboard report schema.
   */
  "attributes"?: DashboardReportAttributes;
  /**
   * ID of the dashboard report.
   */
  "id": string;
  /**
   * Relationships of a dashboard report.
   */
  "relationships"?: DashboardReportRelationships;
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
      type: "DashboardReportAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "DashboardReportRelationships",
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
    return DashboardReport.attributeTypeMap;
  }

  public constructor() {}
}
