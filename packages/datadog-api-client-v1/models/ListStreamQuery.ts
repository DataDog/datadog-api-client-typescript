/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListStreamComputeItems } from "./ListStreamComputeItems";
import { ListStreamGroupByItems } from "./ListStreamGroupByItems";
import { ListStreamSource } from "./ListStreamSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updated list stream widget.
 */
export class ListStreamQuery {
  /**
   * Compute configuration for the List Stream Widget. Compute can be used only with the logs_transaction_stream (from 1 to 5 items) list stream source.
   */
  "compute"?: Array<ListStreamComputeItems>;
  /**
   * Source from which to query items to display in the stream.
   */
  "dataSource": ListStreamSource;
  /**
   * Group by configuration for the List Stream Widget. Group by can be used only with logs_pattern_stream (up to 3 items) or logs_transaction_stream (one group by item is required) list stream source.
   */
  "groupBy"?: Array<ListStreamGroupByItems>;
  /**
   * List of indexes.
   */
  "indexes"?: Array<string>;
  /**
   * Widget query.
   */
  "queryString": string;
  /**
   * Option for storage location. Feature in Private Beta.
   */
  "storage"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "Array<ListStreamComputeItems>",
    },
    dataSource: {
      baseName: "data_source",
      type: "ListStreamSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ListStreamGroupByItems>",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    storage: {
      baseName: "storage",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
