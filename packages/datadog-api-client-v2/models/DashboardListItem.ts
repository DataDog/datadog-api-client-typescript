/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Creator } from "./Creator";
import { DashboardType } from "./DashboardType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A dashboard within a list.
 */
export class DashboardListItem {
  /**
   * Creator of the object.
   */
  "author"?: Creator;
  /**
   * Date of creation of the dashboard.
   */
  "created"?: Date;
  /**
   * URL to the icon of the dashboard.
   */
  "icon"?: string;
  /**
   * ID of the dashboard.
   */
  "id": string;
  /**
   * The short name of the integration.
   */
  "integrationId"?: string;
  /**
   * Whether or not the dashboard is in the favorites.
   */
  "isFavorite"?: boolean;
  /**
   * Whether or not the dashboard is read only.
   */
  "isReadOnly"?: boolean;
  /**
   * Whether the dashboard is publicly shared or not.
   */
  "isShared"?: boolean;
  /**
   * Date of last edition of the dashboard.
   */
  "modified"?: Date;
  /**
   * Popularity of the dashboard.
   */
  "popularity"?: number;
  /**
   * List of team names representing ownership of a dashboard.
   */
  "tags"?: Array<string>;
  /**
   * Title of the dashboard.
   */
  "title"?: string;
  /**
   * The type of the dashboard.
   */
  "type": DashboardType;
  /**
   * URL path to the dashboard.
   */
  "url"?: string;

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
    icon: {
      type: "string",
    },
    id: {
      type: "string",
      required: true,
    },
    integrationId: {
      baseName: "integration_id",
      type: "string",
    },
    isFavorite: {
      baseName: "is_favorite",
      type: "boolean",
    },
    isReadOnly: {
      baseName: "is_read_only",
      type: "boolean",
    },
    isShared: {
      baseName: "is_shared",
      type: "boolean",
    },
    modified: {
      type: "Date",
      format: "date-time",
    },
    popularity: {
      type: "number",
      format: "int32",
    },
    tags: {
      type: "Array<string>",
    },
    title: {
      type: "string",
    },
    type: {
      type: "DashboardType",
      required: true,
    },
    url: {
      type: "string",
    },
  };
}
