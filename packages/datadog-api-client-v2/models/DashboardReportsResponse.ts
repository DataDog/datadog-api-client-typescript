/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReport } from "./DashboardReport";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response body when fetching a list of dashboard reports.
 */
export class DashboardReportsResponse {
  /**
   * JSON:API data key with value of a list of dashboard reports.
   */
  "data"?: Array<DashboardReport>;

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
      type: "Array<DashboardReport>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportsResponse.attributeTypeMap;
  }

  public constructor() {}
}
