import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CheckStatusBackendDefinitionGrouping } from "./CheckStatusBackendDefinitionGrouping";
import { CheckStatusBackendDefinitionType } from "./CheckStatusBackendDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CheckStatusBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "check": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "group"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "grouping": CheckStatusBackendDefinitionGrouping;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "tags"?: Array<string>;
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
  "type": CheckStatusBackendDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    check: {
      baseName: "check",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    group: {
      baseName: "group",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    grouping: {
      baseName: "grouping",
      type: "CheckStatusBackendDefinitionGrouping",
      required: true,
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
      type: "CheckStatusBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CheckStatusBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
