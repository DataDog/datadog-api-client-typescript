/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Email destinations for a report.
 */
export class DashboardReportDestinationEmail {
  /**
   * List of email addresses to send reports to.
   */
  "recipientAddresses"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    recipientAddresses: {
      baseName: "recipient_addresses",
      type: "Array<string>",
      format: "email",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportDestinationEmail.attributeTypeMap;
  }

  public constructor() {}
}
