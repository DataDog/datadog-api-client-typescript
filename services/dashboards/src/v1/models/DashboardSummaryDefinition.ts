import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardLayoutType } from "./DashboardLayoutType";

/**
 * Dashboard definition.
 */
export class DashboardSummaryDefinition {
  /**
   * Identifier of the dashboard author.
   */
  "authorHandle"?: string;
  /**
   * Creation date of the dashboard.
   */
  "createdAt"?: Date;
  /**
   * Description of the dashboard.
   */
  "description"?: string;
  /**
   * Dashboard identifier.
   */
  "id"?: string;
  /**
   * Whether this dashboard is read-only. If True, only the author and admins can make changes to it.
   *
   * This property is deprecated; please use the [Restriction Policies API](https://docs.datadoghq.com/api/latest/restriction-policies/) instead to manage write authorization for individual dashboards.
   */
  "isReadOnly"?: boolean;
  /**
   * Layout type of the dashboard.
   */
  "layoutType"?: DashboardLayoutType;
  /**
   * Modification date of the dashboard.
   */
  "modifiedAt"?: Date;
  /**
   * Title of the dashboard.
   */
  "title"?: string;
  /**
   * URL of the dashboard.
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
    authorHandle: {
      baseName: "author_handle",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isReadOnly: {
      baseName: "is_read_only",
      type: "boolean",
    },
    layoutType: {
      baseName: "layout_type",
      type: "DashboardLayoutType",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    title: {
      baseName: "title",
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
