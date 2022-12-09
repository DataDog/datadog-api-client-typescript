/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageCustomReportsData } from "./UsageCustomReportsData";
import { UsageCustomReportsMeta } from "./UsageCustomReportsMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing available custom reports.
 */
export class UsageCustomReportsResponse {
  /**
   * An array of available custom reports.
   */
  "data"?: Array<UsageCustomReportsData>;
  /**
   * The object containing document metadata.
   */
  "meta"?: UsageCustomReportsMeta;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<UsageCustomReportsData>",
    },
    meta: {
      baseName: "meta",
      type: "UsageCustomReportsMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCustomReportsResponse.attributeTypeMap;
  }

  public constructor() {}
}
