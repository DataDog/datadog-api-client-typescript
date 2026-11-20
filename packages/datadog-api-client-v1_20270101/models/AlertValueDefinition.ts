/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertValueDefinitionType } from "./AlertValueDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AlertValueDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alertId": string;
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
  "textAlign"?: WidgetTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textSize"?: string;
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
  "type": AlertValueDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "unit"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alertId: {
      baseName: "alert_id",
      type: "string",
      required: true,
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
    textAlign: {
      baseName: "text_align",
      type: "WidgetTextAlign",
    },
    textSize: {
      baseName: "text_size",
      type: "string",
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
      type: "AlertValueDefinitionType",
      required: true,
    },
    unit: {
      baseName: "unit",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AlertValueDefinition.attributeTypeMap;
  }

  public constructor() {}
}
