/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryValueBackendDefinitionType } from "./QueryValueBackendDefinitionType";
import { QueryValueBackendRequest } from "./QueryValueBackendRequest";
import { TimeseriesBackground } from "./TimeseriesBackground";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryValueBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "autoscale"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customUnit"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "precision"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": Array<QueryValueBackendRequest>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textAlign"?: WidgetTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: WidgetTime;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeseriesBackground"?: TimeseriesBackground;
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
  "type": QueryValueBackendDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    autoscale: {
      baseName: "autoscale",
      type: "boolean",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    customUnit: {
      baseName: "custom_unit",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    precision: {
      baseName: "precision",
      type: "number",
      format: "double",
    },
    requests: {
      baseName: "requests",
      type: "Array<QueryValueBackendRequest>",
      required: true,
    },
    textAlign: {
      baseName: "text_align",
      type: "WidgetTextAlign",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    timeseriesBackground: {
      baseName: "timeseries_background",
      type: "TimeseriesBackground",
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
      type: "QueryValueBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryValueBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
