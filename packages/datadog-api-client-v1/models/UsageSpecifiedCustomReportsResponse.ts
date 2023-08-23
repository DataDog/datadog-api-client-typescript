/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSpecifiedCustomReportsData } from "./UsageSpecifiedCustomReportsData";
import { UsageSpecifiedCustomReportsMeta } from "./UsageSpecifiedCustomReportsMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Returns available specified custom reports.
 */
export class UsageSpecifiedCustomReportsResponse {
  /**
   * Response containing date and type for specified custom reports.
   */
  "data"?: UsageSpecifiedCustomReportsData;
  /**
   * The object containing document metadata.
   */
  "meta"?: UsageSpecifiedCustomReportsMeta;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "UsageSpecifiedCustomReportsData",
    },
    meta: {
      type: "UsageSpecifiedCustomReportsMeta",
    },
  };
}
