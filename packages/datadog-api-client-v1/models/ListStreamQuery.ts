/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListStreamComputeItems } from "./ListStreamComputeItems";
import { ListStreamGroupByItems } from "./ListStreamGroupByItems";
import { ListStreamSource } from "./ListStreamSource";
import { WidgetEventSize } from "./WidgetEventSize";
import { WidgetFieldSort } from "./WidgetFieldSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updated list stream widget.
 */
export class ListStreamQuery {
  /**
   * Specifies the field for logs pattern clustering. Usable only with logs_pattern_stream.
   */
  "clusteringPatternFieldPath"?: string;
  /**
   * Compute configuration for the List Stream Widget. Compute can be used only with the logs_transaction_stream (from 1 to 5 items) list stream source.
   */
  "compute"?: Array<ListStreamComputeItems>;
  /**
   * Source from which to query items to display in the stream.
   */
  "dataSource": ListStreamSource;
  /**
   * Size to use to display an event.
   */
  "eventSize"?: WidgetEventSize;
  /**
   * Group by configuration for the List Stream Widget. Group by can be used only with logs_pattern_stream (up to 4 items) or logs_transaction_stream (one group by item is required) list stream source.
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
   * Which column and order to sort by
   */
  "sort"?: WidgetFieldSort;
  /**
   * Option for storage location. Feature in Private Beta.
   */
  "storage"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    clusteringPatternFieldPath: {
      baseName: "clustering_pattern_field_path",
      type: "string",
    },
    compute: {
      baseName: "compute",
      type: "Array<ListStreamComputeItems>",
    },
    dataSource: {
      baseName: "data_source",
      type: "ListStreamSource",
      required: true,
    },
    eventSize: {
      baseName: "event_size",
      type: "WidgetEventSize",
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
    sort: {
      baseName: "sort",
      type: "WidgetFieldSort",
    },
    storage: {
      baseName: "storage",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
