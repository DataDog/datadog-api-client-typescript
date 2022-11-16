/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportCreate } from "./DashboardReportCreate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body when creating a new dashboard report.
 */
export class DashboardReportCreateRequest {
  /**
   * Schema for request body to create a dashboard report.
   */
  "data": DashboardReportCreate;

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
      type: "DashboardReportCreate",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
