import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListStreamComputeItems } from "./ListStreamComputeItems";
import { ListStreamGroupByItems } from "./ListStreamGroupByItems";
import { ListStreamIssuePersona } from "./ListStreamIssuePersona";
import { ListStreamIssueState } from "./ListStreamIssueState";
import { ListStreamSource } from "./ListStreamSource";
import { WidgetEventSize } from "./WidgetEventSize";
import { WidgetFieldSort } from "./WidgetFieldSort";

/**
 * Updated list stream widget.
 */
export class ListStreamQuery {
  /**
   * Filter by assignee UUIDs. Usable only with `issue_stream`.
   */
  "assigneeUuids"?: Array<string>;
  /**
   * Specifies the field for logs pattern clustering. Usable only with logs_pattern_stream.
   */
  "clusteringPatternFieldPath"?: string;
  /**
   * Compute configuration for the List Stream Widget. Compute can be used only with the logs_transaction_stream (from 1 to 5 items) list stream source.
   */
  "compute"?: Array<ListStreamComputeItems>;
  /**
   * Source from which to query items to display in the stream. apm_issue_stream, rum_issue_stream, and logs_issue_stream are deprecated. Use issue_stream instead.
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
   * Persona filter for the `issue_stream` data source.
   */
  "persona"?: ListStreamIssuePersona;
  /**
   * Widget query.
   */
  "queryString": string;
  /**
   * Which column and order to sort by
   */
  "sort"?: WidgetFieldSort;
  /**
   * Filter by issue states. Usable only with `issue_stream`.
   */
  "states"?: Array<ListStreamIssueState>;
  /**
   * Option for storage location. Feature in Private Beta.
   */
  "storage"?: string;
  /**
   * Filter by suspected causes. Usable only with `issue_stream`.
   */
  "suspectedCauses"?: Array<string>;
  /**
   * Filter by team handles. Usable only with `issue_stream`.
   */
  "teamHandles"?: Array<string>;
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
    assigneeUuids: {
      baseName: "assignee_uuids",
      type: "Array<string>",
    },
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
    persona: {
      baseName: "persona",
      type: "ListStreamIssuePersona",
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
    states: {
      baseName: "states",
      type: "Array<ListStreamIssueState>",
    },
    storage: {
      baseName: "storage",
      type: "string",
    },
    suspectedCauses: {
      baseName: "suspected_causes",
      type: "Array<string>",
    },
    teamHandles: {
      baseName: "team_handles",
      type: "Array<string>",
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
