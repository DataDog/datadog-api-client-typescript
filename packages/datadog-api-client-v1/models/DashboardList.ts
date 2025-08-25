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
    author: {
      baseName: "author",
      type: "Creator",
    },
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    dashboardCount: {
      baseName: "dashboard_count",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    isFavorite: {
      baseName: "is_favorite",
      type: "boolean",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardList.attributeTypeMap;
  }

  public constructor() {}
}
