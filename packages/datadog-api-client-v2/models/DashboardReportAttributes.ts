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
 * Attributes for the dashboard report schema.
 */
export class DashboardReportAttributes {
  /**
   * Date the report was created.
   */
  "createdAt"?: Date;
  /**
   * Description of the report used in both the user interface, and as part of the email body for each report sent. Must be a UTF-8 encoded string less than 4 KiB in size.
   */
  "description"?: string;
  /**
   * Report destination-specific configuration. This determines how reports are sent. Only email destinations are supported.
   */
  "destinations"?: DashboardReportDestination;
  /**
   * Date the report was most recently modified.
   */
  "modifiedAt"?: Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    destinations: {
      baseName: "destinations",
      type: "DashboardReportDestination",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
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
    return DashboardReportAttributes.attributeTypeMap;
  }

  public constructor() {}
}
