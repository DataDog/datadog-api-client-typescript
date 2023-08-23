/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination settings.
 */
export class EventsRequestPage {
  /**
   * The returned paging point to use to get the next results.
   */
  "cursor"?: string;
  /**
   * The maximum number of logs in the response.
   */
  "limit"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cursor: {
      type: "string",
    },
    limit: {
      type: "number",
      format: "int32",
    },
  };
}
