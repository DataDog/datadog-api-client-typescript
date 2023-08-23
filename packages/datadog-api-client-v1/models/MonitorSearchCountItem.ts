/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A facet item.
 */
export class MonitorSearchCountItem {
  /**
   * The number of found monitors with the listed value.
   */
  "count"?: number;
  /**
   * The facet value.
   */
  "name"?: any;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "any",
    },
  };
}
