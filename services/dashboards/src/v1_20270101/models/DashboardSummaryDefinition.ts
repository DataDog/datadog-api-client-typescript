import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Creator } from "../../v1/models/Creator";
import { DashboardSummaryID } from "./DashboardSummaryID";

/**
 * Dashboard definition.
 */
export class DashboardSummaryDefinition {
  /**
   * Object describing the creator of the shared element.
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
  "id"?: DashboardSummaryID;
  /**
   * The short name of the integration.
   */
  "integrationId"?: string;
  /**
   * Whether the dashboard is in the favorites.
   */
  "isFavorite"?: boolean;
  /**
   * Whether the dashboard is read only.
   */
  "isReadOnly"?: boolean;
  /**
   * Whether the dashboard is publicly shared.
   */
  "isShared"?: boolean;
  /**
   * Date when the dashboard was last viewed.
   */
  "lastViewDate"?: string;
  /**
   * Date of last edition of the dashboard.
   */
  "modified"?: Date;
  /**
   * Popularity of the dashboard.
   */
  "popularity"?: number;
  /**
   * List of team names representing ownership of the dashboard.
   */
  "tags"?: Array<string>;
  /**
   * Title of the dashboard.
   */
  "title"?: string;
  /**
   * The type of the dashboard.
   */
  "type"?: string;
  /**
   * URL path to the dashboard.
   */
  "url"?: string;
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
    icon: {
      baseName: "icon",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "DashboardSummaryID",
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
    lastViewDate: {
      baseName: "last_view_date",
      type: "string",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    popularity: {
      baseName: "popularity",
      type: "number",
      format: "int32",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
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
    return DashboardSummaryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
