/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * The execution method for multi-value filters.
   */
  "tagsExecution"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    q: {
      type: "string",
      required: true,
    },
    tagsExecution: {
      baseName: "tags_execution",
      type: "string",
    },
  };
}
