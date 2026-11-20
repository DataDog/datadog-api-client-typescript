import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SloBackendDefinitionType } from "./SloBackendDefinitionType";
import { SloBackendDefinitionViewType } from "./SloBackendDefinitionViewType";
import { SloWidgetTimeWindow } from "./SloWidgetTimeWindow";
import { SloWidgetViewMode } from "./SloWidgetViewMode";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SloBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "additionalQueryFilters"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "globalTimeTarget"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showErrorBudget": boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sloId": string | null;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: WidgetTime;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeWindows": Array<SloWidgetTimeWindow>;
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
  "type": SloBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "viewMode": SloWidgetViewMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "viewType": SloBackendDefinitionViewType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    additionalQueryFilters: {
      baseName: "additional_query_filters",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    globalTimeTarget: {
      baseName: "global_time_target",
      type: "string",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    showErrorBudget: {
      baseName: "show_error_budget",
      type: "boolean",
      required: true,
    },
    sloId: {
      baseName: "slo_id",
      type: "string",
      required: true,
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    timeWindows: {
      baseName: "time_windows",
      type: "Array<SloWidgetTimeWindow>",
      required: true,
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
      type: "SloBackendDefinitionType",
      required: true,
    },
    viewMode: {
      baseName: "view_mode",
      type: "SloWidgetViewMode",
      required: true,
    },
    viewType: {
      baseName: "view_type",
      type: "SloBackendDefinitionViewType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SloBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
