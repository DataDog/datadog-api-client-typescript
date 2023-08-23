/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response containing attributes for specified custom reports.
 */
export class UsageSpecifiedCustomReportsAttributes {
  /**
   * The date the specified custom report was computed.
   */
  "computedOn"?: string;
  /**
   * The ending date of specified custom report.
   */
  "endDate"?: string;
  /**
   * A downloadable file for the specified custom reporting file.
   */
  "location"?: string;
  /**
   * size
   */
  "size"?: number;
  /**
   * The starting date of specified custom report.
   */
  "startDate"?: string;
  /**
   * A list of tags to apply to specified custom reports.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    computedOn: {
      baseName: "computed_on",
      type: "string",
    },
    endDate: {
      baseName: "end_date",
      type: "string",
    },
    location: {
      type: "string",
    },
    size: {
      type: "number",
      format: "int64",
    },
    startDate: {
      baseName: "start_date",
      type: "string",
    },
    tags: {
      type: "Array<string>",
    },
  };
}
