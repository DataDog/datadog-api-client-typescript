/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportDestination } from "./DashboardReportDestination";
import { DashboardReportSchedule } from "./DashboardReportSchedule";
import { DashboardReportTimeframe } from "./DashboardReportTimeframe";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a dashboard report that can be updated. Fields that are not to be updated can be omitted, with some exceptions for `repeat_on_day_of_week` and `repeat_on_day_of_month`, as noted in their respective sections.
 */
export class DashboardReportUpdateAttributes {
  /**
   * Description of the report in both the user interface and as part of the email body for each report sent. Must be a UTF-8 encoded string less than 4 KiB in size.
   */
  "description"?: string;
  /**
   * Report destination-specific configuration. This determines how reports are sent. Only email destinations are supported.
   */
  "destinations"?: DashboardReportDestination;
  /**
   * Report schedule-specific configuration that defines when and how often a report is sent.
   */
  "schedule"?: DashboardReportSchedule;
  /**
   * Template variables used to parameterize the dashboard when generating a report.
   */
  "templateVariables"?: { [key: string]: string };
  /**
   * Time period covered by the widgets in the dashboard report, at the time of report generation.
   */
  "timeframe"?: DashboardReportTimeframe;
  /**
   * Title of the report in both the user interface, and as part of the email subject for each report sent.
   */
  "title"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    destinations: {
      baseName: "destinations",
      type: "DashboardReportDestination",
    },
    schedule: {
      baseName: "schedule",
      type: "DashboardReportSchedule",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "{ [key: string]: string; }",
    },
    timeframe: {
      baseName: "timeframe",
      type: "DashboardReportTimeframe",
    },
    title: {
      baseName: "title",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
