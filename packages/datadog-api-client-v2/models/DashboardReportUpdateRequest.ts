/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportUpdateRequestData } from "./DashboardReportUpdateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body when updating a dashboard report.
 */
export class DashboardReportUpdateRequest {
  /**
   * JSON:API data key.
   */
  "data": DashboardReportUpdateRequestData;

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
      type: "DashboardReportUpdateRequestData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
