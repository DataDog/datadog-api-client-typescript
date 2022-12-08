/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOListWidgetDefinitionType } from "./SLOListWidgetDefinitionType";
import { SLOListWidgetRequest } from "./SLOListWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Use the SLO List widget to track your SLOs (Service Level Objectives) on dashboards.
 */
export class SLOListWidgetDefinition {
  /**
   * Array of one request object to display in the widget.
   */
  "requests": [SLOListWidgetRequest];
  /**
   * Title of the widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign | UnparsedObject;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of the SLO List widget.
   */
  "type": SLOListWidgetDefinitionType | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    requests: {
      baseName: "requests",
      type: "[SLOListWidgetRequest]",
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
      type: "SLOListWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOListWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
