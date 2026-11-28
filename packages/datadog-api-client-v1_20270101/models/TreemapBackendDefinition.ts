/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TreemapBackendDefinitionColorBy } from "./TreemapBackendDefinitionColorBy";
import { TreemapBackendDefinitionGroupBy } from "./TreemapBackendDefinitionGroupBy";
import { TreemapBackendDefinitionSizeBy } from "./TreemapBackendDefinitionSizeBy";
import { TreemapBackendDefinitionType } from "./TreemapBackendDefinitionType";
import { TreemapBackendRequest } from "./TreemapBackendRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreemapBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "colorBy"?: TreemapBackendDefinitionColorBy;
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
  "groupBy"?: TreemapBackendDefinitionGroupBy;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": Array<TreemapBackendRequest>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sizeBy"?: TreemapBackendDefinitionSizeBy;
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
  "type": TreemapBackendDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    colorBy: {
      baseName: "color_by",
      type: "TreemapBackendDefinitionColorBy",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "TreemapBackendDefinitionGroupBy",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "Array<TreemapBackendRequest>",
      required: true,
    },
    sizeBy: {
      baseName: "size_by",
      type: "TreemapBackendDefinitionSizeBy",
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
      type: "TreemapBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreemapBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
