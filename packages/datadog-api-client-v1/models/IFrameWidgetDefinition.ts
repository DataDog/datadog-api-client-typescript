/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IFrameWidgetDefinitionType } from "./IFrameWidgetDefinitionType";

import { AttributeTypeMap } from "../util";

/**
 * The iframe widget allows you to embed a portion of any other web page on your dashboard. Only available on FREE layout dashboards.
 */
export class IFrameWidgetDefinition {
  /**
   * Type of the iframe widget.
   */
  "type": IFrameWidgetDefinitionType;
  /**
   * URL of the iframe.
   */
  "url": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "IFrameWidgetDefinitionType",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IFrameWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
