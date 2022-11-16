/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportType } from "./DashboardReportType";
import { DashboardReportUpdateAttributes } from "./DashboardReportUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API data key.
 */
export class DashboardReportUpdateRequestData {
  /**
   * Attributes of a dashboard report that can be updated. Fields that are not to be updated can be omitted, with some exceptions for `repeat_on_day_of_week` and `repeat_on_day_of_month`, as noted in their respective sections.
   */
  "attributes"?: DashboardReportUpdateAttributes;
  /**
   * ID of the report to update.
   */
  "id": string;
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
      type: "DashboardReportUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return DashboardReportUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
