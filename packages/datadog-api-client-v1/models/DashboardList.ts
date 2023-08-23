/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Creator } from "./Creator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Your Datadog Dashboards.
 */
export class DashboardList {
  /**
   * Object describing the creator of the shared element.
   */
  "author"?: Creator;
  /**
   * Date of creation of the dashboard list.
   */
  "created"?: Date;
  /**
   * The number of dashboards in the list.
   */
  "dashboardCount"?: number;
  /**
   * The ID of the dashboard list.
   */
  "id"?: number;
  /**
   * Whether or not the list is in the favorites.
   */
  "isFavorite"?: boolean;
  /**
   * Date of last edition of the dashboard list.
   */
  "modified"?: Date;
  /**
   * The name of the dashboard list.
   */
  "name": string;
  /**
   * The type of dashboard list.
   */
  "type"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    author: {
      type: "Creator",
    },
    created: {
      type: "Date",
      format: "date-time",
    },
    dashboardCount: {
      baseName: "dashboard_count",
      type: "number",
      format: "int64",
    },
    id: {
      type: "number",
      format: "int64",
    },
    isFavorite: {
      baseName: "is_favorite",
      type: "boolean",
    },
    modified: {
      type: "Date",
      format: "date-time",
    },
    name: {
      type: "string",
      required: true,
    },
    type: {
      type: "string",
    },
  };
}
