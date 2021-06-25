/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogQueryDefinitionGroupBySort } from "./LogQueryDefinitionGroupBySort";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Defined items in the group.
 */

export class LogQueryDefinitionGroupBy {
  /**
   * Facet name.
   */
  "facet": string;
  /**
   * Maximum number of items in the group.
   */
  "limit"?: number;
  "sort"?: LogQueryDefinitionGroupBySort;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    facet: {
      baseName: "facet",
      type: "string",
      format: "",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    sort: {
      baseName: "sort",
      type: "LogQueryDefinitionGroupBySort",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogQueryDefinitionGroupBy.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogQueryDefinitionGroupBy {
    const res = new LogQueryDefinitionGroupBy();

    if (data.facet === undefined) {
      throw new TypeError(
        "missing required attribute 'facet' on 'LogQueryDefinitionGroupBy' object"
      );
    }
    res.facet = ObjectSerializer.deserialize(data.facet, "string", "");

    res.limit = ObjectSerializer.deserialize(data.limit, "number", "int64");

    res.sort = ObjectSerializer.deserialize(
      data.sort,
      "LogQueryDefinitionGroupBySort",
      ""
    );

    return res;
  }

  static serialize(data: LogQueryDefinitionGroupBy): { [key: string]: any } {
    const attributeTypes = LogQueryDefinitionGroupBy.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.facet === undefined) {
      throw new TypeError(
        "missing required attribute 'facet' on 'LogQueryDefinitionGroupBy' object"
      );
    }
    res.facet = ObjectSerializer.serialize(data.facet, "string", "");

    res.limit = ObjectSerializer.serialize(data.limit, "number", "int64");

    res.sort = ObjectSerializer.serialize(
      data.sort,
      "LogQueryDefinitionGroupBySort",
      ""
    );

    return res;
  }

  public constructor() {}
}
