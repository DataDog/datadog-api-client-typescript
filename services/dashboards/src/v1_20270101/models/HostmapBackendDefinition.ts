import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HostmapBackendDefinition20270101Requests } from "./HostmapBackendDefinition20270101Requests";
import { HostmapBackendDefinitionNodeType } from "./HostmapBackendDefinitionNodeType";
import { HostmapBackendDefinitionStyle } from "./HostmapBackendDefinitionStyle";
import { HostmapBackendDefinitionType } from "./HostmapBackendDefinitionType";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapBackendDefinition {
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
  "group"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "noGroupHosts"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "noMetricHosts"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nodeType"?: HostmapBackendDefinitionNodeType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": HostmapBackendDefinition20270101Requests;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scope"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: HostmapBackendDefinitionStyle;
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
  "type": HostmapBackendDefinitionType;
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
    description: {
      baseName: "description",
      type: "string",
    },
    group: {
      baseName: "group",
      type: "Array<string>",
    },
    noGroupHosts: {
      baseName: "no_group_hosts",
      type: "boolean",
    },
    noMetricHosts: {
      baseName: "no_metric_hosts",
      type: "boolean",
    },
    nodeType: {
      baseName: "node_type",
      type: "HostmapBackendDefinitionNodeType",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "HostmapBackendDefinition20270101Requests",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "Array<string>",
    },
    style: {
      baseName: "style",
      type: "HostmapBackendDefinitionStyle",
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
      type: "HostmapBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostmapBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
