/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Paging attributes for listing events.
 */
export class CIAppQueryPageOptions {
  /**
   * List following results with a cursor provided in the previous query.
   */
  "cursor"?: string;
  /**
   * Maximum number of events in the response.
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
