import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridColorConfig } from "./HeatgridColorConfig";
import { HeatgridDefinitionType } from "./HeatgridDefinitionType";
import { HeatgridLabelColumnConfig } from "./HeatgridLabelColumnConfig";
import { HeatgridLegendConfig } from "./HeatgridLegendConfig";
import { HeatgridSortAndOrderBy } from "./HeatgridSortAndOrderBy";
import { HeatgridTileDefRequest } from "./HeatgridTileDefRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "color"?: HeatgridColorConfig;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "labelColumn"?: HeatgridLabelColumnConfig;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "legend"?: HeatgridLegendConfig;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": Array<HeatgridTileDefRequest>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort": HeatgridSortAndOrderBy;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: WidgetTime;
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
  "type": HeatgridDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    color: {
      baseName: "color",
      type: "HeatgridColorConfig",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    labelColumn: {
      baseName: "label_column",
      type: "HeatgridLabelColumnConfig",
    },
    legend: {
      baseName: "legend",
      type: "HeatgridLegendConfig",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "Array<HeatgridTileDefRequest>",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "HeatgridSortAndOrderBy",
      required: true,
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
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
      type: "HeatgridDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridDefinition.attributeTypeMap;
  }

  public constructor() {}
}
