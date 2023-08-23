/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The event query.
 */
export class EventQueryDefinition {
  /**
   * The query being made on the event.
   */
  "search": string;
  /**
   * The execution method for multi-value filters. Can be either and or or.
   */
  "tagsExecution": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    search: {
      type: "string",
      required: true,
    },
    tagsExecution: {
      baseName: "tags_execution",
      type: "string",
      required: true,
    },
  };
}
