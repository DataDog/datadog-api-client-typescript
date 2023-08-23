/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing how to split the graph to display multiple visualizations per request.
 */
export class NotebookSplitBy {
  /**
   * Keys to split on.
   */
  "keys": Array<string>;
  /**
   * Tags to split on.
   */
  "tags": Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    keys: {
      type: "Array<string>",
      required: true,
    },
    tags: {
      type: "Array<string>",
      required: true,
    },
  };
}
