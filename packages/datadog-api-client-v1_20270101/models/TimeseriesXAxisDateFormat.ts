/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesXAxisDayDateFormat } from "./TimeseriesXAxisDayDateFormat";
import { TimeseriesXAxisMonthDateFormat } from "./TimeseriesXAxisMonthDateFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesXAxisDateFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "day"?: TimeseriesXAxisDayDateFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "month"?: TimeseriesXAxisMonthDateFormat;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    day: {
      baseName: "day",
      type: "TimeseriesXAxisDayDateFormat",
    },
    month: {
      baseName: "month",
      type: "TimeseriesXAxisMonthDateFormat",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesXAxisDateFormat.attributeTypeMap;
  }

  public constructor() {}
}
