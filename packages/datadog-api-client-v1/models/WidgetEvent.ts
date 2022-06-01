/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Event overlay control options.
 *
 * See the dedicated [Events JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/widget_json/#events-schema)
 * to learn how to build the `<EVENTS_SCHEMA>`.
 */
export class WidgetEvent {
  /**
   * Query definition.
   */
  "q": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    q: {
      baseName: "q",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetEvent.attributeTypeMap;
  }

  public constructor() {}
}
