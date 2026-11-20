import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogStreamDefinitionType } from "./LogStreamDefinitionType";
import { MessageDisplay } from "./MessageDisplay";
import { SortPair } from "./SortPair";
import { StorageType } from "./StorageType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogStreamDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "messageDisplay"?: MessageDisplay;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showDateColumn"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showMessageColumn"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: SortPair;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "storage"?: StorageType;
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
  "type": LogStreamDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<string>",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    messageDisplay: {
      baseName: "message_display",
      type: "MessageDisplay",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    showDateColumn: {
      baseName: "show_date_column",
      type: "boolean",
    },
    showMessageColumn: {
      baseName: "show_message_column",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "SortPair",
    },
    storage: {
      baseName: "storage",
      type: "StorageType",
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
      type: "LogStreamDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogStreamDefinition.attributeTypeMap;
  }

  public constructor() {}
}
