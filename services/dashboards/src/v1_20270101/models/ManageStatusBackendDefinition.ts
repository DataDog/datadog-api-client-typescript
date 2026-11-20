import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ManageStatusBackendDefinitionColorPreference } from "./ManageStatusBackendDefinitionColorPreference";
import { ManageStatusBackendDefinitionDisplayFormat } from "./ManageStatusBackendDefinitionDisplayFormat";
import { ManageStatusBackendDefinitionLastTriggeredFormat } from "./ManageStatusBackendDefinitionLastTriggeredFormat";
import { ManageStatusBackendDefinitionSummaryType } from "./ManageStatusBackendDefinitionSummaryType";
import { ManageStatusBackendDefinitionType } from "./ManageStatusBackendDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ManageStatusBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "colorPreference"?: ManageStatusBackendDefinitionColorPreference;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "count"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "displayFormat"?: ManageStatusBackendDefinitionDisplayFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideZeroCounts"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "lastTriggeredFormat"?: ManageStatusBackendDefinitionLastTriggeredFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showInvestigation"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showLastTriggered"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showPriority"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showStatus"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "start"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "summaryType"?: ManageStatusBackendDefinitionSummaryType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "title"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleSize"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ManageStatusBackendDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    colorPreference: {
      baseName: "color_preference",
      type: "ManageStatusBackendDefinitionColorPreference",
    },
    count: {
      baseName: "count",
      type: "number",
      format: "double",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayFormat: {
      baseName: "display_format",
      type: "ManageStatusBackendDefinitionDisplayFormat",
    },
    hideZeroCounts: {
      baseName: "hide_zero_counts",
      type: "boolean",
    },
    lastTriggeredFormat: {
      baseName: "last_triggered_format",
      type: "ManageStatusBackendDefinitionLastTriggeredFormat",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    showInvestigation: {
      baseName: "show_investigation",
      type: "boolean",
    },
    showLastTriggered: {
      baseName: "show_last_triggered",
      type: "boolean",
    },
    showPriority: {
      baseName: "show_priority",
      type: "boolean",
    },
    showStatus: {
      baseName: "show_status",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "double",
    },
    summaryType: {
      baseName: "summary_type",
      type: "ManageStatusBackendDefinitionSummaryType",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ManageStatusBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ManageStatusBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
