/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetLiveSpan } from "./WidgetLiveSpan";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relative timeframe.
 */
export class NotebookRelativeTime {
  /**
   * The available timeframes depend on the widget you are using.
   */
  "liveSpan": WidgetLiveSpan;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    liveSpan: {
      baseName: "live_span",
      type: "WidgetLiveSpan",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookRelativeTime.attributeTypeMap;
  }

  public constructor() {}
}
