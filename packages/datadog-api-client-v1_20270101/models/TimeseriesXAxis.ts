/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesXAxisDateFormat } from "./TimeseriesXAxisDateFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesXAxis {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dateFormat"?: TimeseriesXAxisDateFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dateFormat: {
      baseName: "date_format",
      type: "TimeseriesXAxisDateFormat",
    },
    label: {
      baseName: "label",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesXAxis.attributeTypeMap;
  }

  public constructor() {}
}
