/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportDestinationEmail } from "./DashboardReportDestinationEmail";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Report destination-specific configuration. This determines how reports are sent. Only email destinations are supported.
 */
export class DashboardReportDestination {
  /**
   * Email destinations for a report.
   */
  "email"?: DashboardReportDestinationEmail;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    email: {
      baseName: "email",
      type: "DashboardReportDestinationEmail",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportDestination.attributeTypeMap;
  }

  public constructor() {}
}
