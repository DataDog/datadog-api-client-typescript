/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsMonitorCreator } from "./ProductAnalyticsMonitorCreator";
import { ProductAnalyticsMonitorOptions } from "./ProductAnalyticsMonitorOptions";
import { ProductAnalyticsMonitorStatus } from "./ProductAnalyticsMonitorStatus";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * A Product Analytics monitor in a list.
 */
export class ProductAnalyticsMonitorListItem {
  /**
   * Time the monitor was created.
   */
  "createdTime"?: Date;
  /**
   * The user who created the monitor.
   */
  "creator"?: ProductAnalyticsMonitorCreator;
  /**
   * ID of the monitor.
   */
  "id": string;
  /**
   * Notification message sent when the monitor alerts.
   */
  "message": string;
  /**
   * Time the monitor was last modified.
   */
  "modifiedTime"?: Date;
  /**
   * Name of the monitor.
   */
  "name": string;
  /**
   * Options of a Product Analytics monitor.
   */
  "options": ProductAnalyticsMonitorOptions;
  /**
   * ID of the organization that owns the monitor.
   */
  "orgId": Int64;
  /**
   * Priority of the monitor, from 1 (highest) to 5 (lowest).
   */
  "priority"?: number;
  /**
   * Monitor query.
   */
  "query": string;
  /**
   * Current alert status of the monitor. `No Data` is returned when the monitor has not been evaluated yet.
   */
  "status": ProductAnalyticsMonitorStatus;
  /**
   * Monitor tags, as `key:value` strings.
   */
  "tags"?: Array<string>;

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
    createdTime: {
      baseName: "created_time",
      type: "Date",
      format: "date-time",
    },
    creator: {
      baseName: "creator",
      type: "ProductAnalyticsMonitorCreator",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    modifiedTime: {
      baseName: "modified_time",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "ProductAnalyticsMonitorOptions",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int32",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "ProductAnalyticsMonitorStatus",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ProductAnalyticsMonitorListItem.attributeTypeMap;
  }

  public constructor() {}
}
