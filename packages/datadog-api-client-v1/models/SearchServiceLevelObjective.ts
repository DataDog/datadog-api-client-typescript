/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SearchSLOQuery } from "./SearchSLOQuery";
import { SearchSLOThreshold } from "./SearchSLOThreshold";
import { SLOCreator } from "./SLOCreator";
import { SLOOverallStatuses } from "./SLOOverallStatuses";
import { SLOType } from "./SLOType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A service level objective object includes a service level indicator, thresholds
 * for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
 */
export class SearchServiceLevelObjective {
  /**
   * A list of tags associated with this service level objective.
   * Always included in service level objective responses (but may be empty).
   * Optional in create/update requests.
   */
  "allTags"?: Array<string>;
  /**
   * Creation timestamp (UNIX time in seconds)
   *
   * Always included in service level objective responses.
   */
  "createdAt"?: number;
  /**
   * The creator of the SLO
   */
  "creator"?: SLOCreator;
  /**
   * A user-defined description of the service level objective.
   *
   * Always included in service level objective responses (but may be `null`).
   * Optional in create/update requests.
   */
  "description"?: string;
  /**
   * A list of (up to 100) monitor groups that narrow the scope of a monitor service level objective.
   *
   * Included in service level objective responses if it is not empty. Optional in
   * create/update requests for monitor service level objectives, but may only be
   * used when then length of the `monitor_ids` field is one.
   */
  "groups"?: Array<string>;
  /**
   * A unique identifier for the service level objective object.
   *
   * Always included in service level objective responses.
   */
  "id"?: string;
  /**
   * Modification timestamp (UNIX time in seconds)
   *
   * Always included in service level objective responses.
   */
  "modifiedAt"?: number;
  /**
   * A list of monitor ids that defines the scope of a monitor service level
   * objective. **Required if type is `monitor`**.
   */
  "monitorIds"?: Array<number>;
  /**
   * The name of the service level objective object.
   */
  "name"?: string;
  /**
   * calculated status and error budget remaining.
   */
  "overallStatus"?: Array<SLOOverallStatuses>;
  /**
   * A metric-based SLO. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator
   * to be used because this will sum up all request counts instead of averaging them, or taking the max or
   * min of all of those requests.
   */
  "query"?: SearchSLOQuery;
  /**
   * The thresholds (timeframes and associated targets) for this service level
   * objective object.
   */
  "thresholds"?: Array<SearchSLOThreshold>;
  /**
   * The type of the service level objective.
   */
  "type"?: SLOType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    allTags: {
      baseName: "all_tags",
      type: "Array<string>",
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      format: "int64",
    },
    creator: {
      baseName: "creator",
      type: "SLOCreator",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "number",
      format: "int64",
    },
    monitorIds: {
      baseName: "monitor_ids",
      type: "Array<number>",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    overallStatus: {
      baseName: "overall_status",
      type: "Array<SLOOverallStatuses>",
    },
    query: {
      baseName: "query",
      type: "SearchSLOQuery",
    },
    thresholds: {
      baseName: "thresholds",
      type: "Array<SearchSLOThreshold>",
    },
    type: {
      baseName: "type",
      type: "SLOType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SearchServiceLevelObjective.attributeTypeMap;
  }

  public constructor() {}
}
