/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsCalendarIntervalType } from "./ProductAnalyticsCalendarIntervalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A calendar-aligned bucket definition, such as "every 1 week starting on Monday".
 */
export class ProductAnalyticsCalendarInterval {
  /**
   * Where each bucket starts within the calendar unit. Use an hour for `day` (for example `1am` or `14`),
   * a day name for `week` (for example `monday`), or an ordinal for `month` (for example `1st`).
   */
  "alignment"?: string;
  /**
   * Number of calendar units per bucket.
   */
  "quantity"?: number;
  /**
   * Timezone used to align the buckets.
   */
  "timezone"?: string;
  /**
   * Calendar unit used to bucket cohorts.
   */
  "type": ProductAnalyticsCalendarIntervalType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alignment: {
      baseName: "alignment",
      type: "string",
    },
    quantity: {
      baseName: "quantity",
      type: "number",
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsCalendarIntervalType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsCalendarInterval.attributeTypeMap;
  }

  public constructor() {}
}
