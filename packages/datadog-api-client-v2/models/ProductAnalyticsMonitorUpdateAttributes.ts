/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsMonitorOptions } from "./ProductAnalyticsMonitorOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes to update on a Product Analytics monitor. Fields that are not set are left unchanged.
 * When set, `options` or `tags` replaces the stored value.
 */
export class ProductAnalyticsMonitorUpdateAttributes {
  /**
   * Notification message sent when the monitor alerts.
   */
  "message"?: string;
  /**
   * Name of the monitor.
   */
  "name"?: string;
  /**
   * Options of a Product Analytics monitor.
   */
  "options"?: ProductAnalyticsMonitorOptions;
  /**
   * Priority of the monitor, from 1 (highest) to 5 (lowest).
   */
  "priority"?: number;
  /**
   * Monitor query.
   */
  "query"?: string;
  /**
   * Monitor tags as key and value pairs. Each pair is stored as a `key:value` tag.
   * `chart_id` and `dashboard_id` link the monitor to the chart it was created from. `dashboard_id` requires
   * `chart_id`.
   */
  "tags"?: { [key: string]: string };

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
    message: {
      baseName: "message",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    options: {
      baseName: "options",
      type: "ProductAnalyticsMonitorOptions",
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int32",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
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
    return ProductAnalyticsMonitorUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
