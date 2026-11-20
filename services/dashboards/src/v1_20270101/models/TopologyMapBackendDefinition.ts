import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapInlineData } from "./CustomTopologyMapInlineData";
import { CustomTopologyMapLayout } from "./CustomTopologyMapLayout";
import { TopologyMapBackendDefinition20270101Requests } from "./TopologyMapBackendDefinition20270101Requests";
import { TopologyMapBackendDefinitionType } from "./TopologyMapBackendDefinitionType";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TopologyMapBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "data"?: CustomTopologyMapInlineData;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "layout"?: CustomTopologyMapLayout;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": TopologyMapBackendDefinition20270101Requests;
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
  "type": TopologyMapBackendDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    data: {
      baseName: "data",
      type: "CustomTopologyMapInlineData",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    layout: {
      baseName: "layout",
      type: "CustomTopologyMapLayout",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "TopologyMapBackendDefinition20270101Requests",
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
      type: "TopologyMapBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
