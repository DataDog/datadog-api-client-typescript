import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SearchSLOQuery } from "./SearchSLOQuery";
import { SearchSLOThreshold } from "./SearchSLOThreshold";
import { SLOCreator } from "./SLOCreator";
import { SLOOverallStatuses } from "./SLOOverallStatuses";
import { SLOStatus } from "./SLOStatus";
import { SLOType } from "./SLOType";

/**
 * A service level objective object includes a service level indicator, thresholds
 * for one or more timeframes, and metadata (`name`, `description`, and `tags`).
 */
export class SearchServiceLevelObjectiveAttributes {
  /**
   * A list of tags associated with this service level objective.
   * Always included in service level objective responses (but may be empty).
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
   * Tags with the `env` tag key.
   */
  "envTags"?: Array<string>;
  /**
   * A list of (up to 100) monitor groups that narrow the scope of a monitor service level objective.
   * Included in service level objective responses if it is not empty.
   */
  "groups"?: Array<string>;
  /**
   * Modification timestamp (UNIX time in seconds)
   *
   * Always included in service level objective responses.
   */
  "modifiedAt"?: number;
  /**
   * A list of monitor ids that defines the scope of a monitor service level
   * objective.
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
   * Tags with the `service` tag key.
   */
  "serviceTags"?: Array<string>;
  /**
   * The type of the service level objective.
   */
  "sloType"?: SLOType;
  /**
   * Status of the SLO's primary timeframe.
   */
  "status"?: SLOStatus;
  /**
   * Tags with the `team` tag key.
   */
  "teamTags"?: Array<string>;
  /**
   * The thresholds (timeframes and associated targets) for this service level
   * objective object.
   */
  "thresholds"?: Array<SearchSLOThreshold>;
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
    envTags: {
      baseName: "env_tags",
      type: "Array<string>",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
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
    serviceTags: {
      baseName: "service_tags",
      type: "Array<string>",
    },
    sloType: {
      baseName: "slo_type",
      type: "SLOType",
    },
    status: {
      baseName: "status",
      type: "SLOStatus",
    },
    teamTags: {
      baseName: "team_tags",
      type: "Array<string>",
    },
    thresholds: {
      baseName: "thresholds",
      type: "Array<SearchSLOThreshold>",
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
    return SearchServiceLevelObjectiveAttributes.attributeTypeMap;
  }

  public constructor() {}
}
