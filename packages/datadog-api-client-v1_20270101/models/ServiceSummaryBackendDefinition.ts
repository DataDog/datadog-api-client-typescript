/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceSummaryBackendDefinitionType } from "./ServiceSummaryBackendDefinitionType";
import { ServiceSummaryLayout } from "./ServiceSummaryLayout";
import { ServiceSummarySize } from "./ServiceSummarySize";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ServiceSummaryBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "displayFormat"?: ServiceSummaryLayout;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "env": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "service": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showBreakdown"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showDistribution"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showErrors"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showHits"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showLatency"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showResourceList"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sizeFormat"?: ServiceSummarySize;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "spanName": string;
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
  "type": ServiceSummaryBackendDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    displayFormat: {
      baseName: "display_format",
      type: "ServiceSummaryLayout",
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    showBreakdown: {
      baseName: "show_breakdown",
      type: "boolean",
    },
    showDistribution: {
      baseName: "show_distribution",
      type: "boolean",
    },
    showErrors: {
      baseName: "show_errors",
      type: "boolean",
    },
    showHits: {
      baseName: "show_hits",
      type: "boolean",
    },
    showLatency: {
      baseName: "show_latency",
      type: "boolean",
    },
    showResourceList: {
      baseName: "show_resource_list",
      type: "boolean",
    },
    sizeFormat: {
      baseName: "size_format",
      type: "ServiceSummarySize",
    },
    spanName: {
      baseName: "span_name",
      type: "string",
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
      type: "ServiceSummaryBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceSummaryBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
