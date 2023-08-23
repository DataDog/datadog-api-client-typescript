/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Creator } from "./Creator";
import { ServiceLevelObjectiveQuery } from "./ServiceLevelObjectiveQuery";
import { SLOThreshold } from "./SLOThreshold";
import { SLOTimeframe } from "./SLOTimeframe";
import { SLOType } from "./SLOType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A service level objective object includes a service level indicator, thresholds
 * for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
 */
export class SLOResponseData {
  /**
   * A list of SLO monitors IDs that reference this SLO. This field is returned only when `with_configured_alert_ids` parameter is true in query.
   */
  "configuredAlertIds"?: Array<number>;
  /**
   * Creation timestamp (UNIX time in seconds)
   *
   * Always included in service level objective responses.
   */
  "createdAt"?: number;
  /**
   * Object describing the creator of the shared element.
   */
  "creator"?: Creator;
  /**
   * A user-defined description of the service level objective.
   *
   * Always included in service level objective responses (but may be `null`).
   * Optional in create/update requests.
   */
  "description"?: string;
  /**
   * A list of (up to 20) monitor groups that narrow the scope of a monitor service level objective.
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
   * The union of monitor tags for all monitors referenced by the `monitor_ids`
   * field.
   * Always included in service level objective responses for monitor service level
   * objectives (but may be empty). Ignored in create/update requests. Does not
   * affect which monitors are included in the service level objective (that is
   * determined entirely by the `monitor_ids` field).
   */
  "monitorTags"?: Array<string>;
  /**
   * The name of the service level objective object.
   */
  "name"?: string;
  /**
   * A metric-based SLO. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator
   * to be used because this will sum up all request counts instead of averaging them, or taking the max or
   * min of all of those requests.
   */
  "query"?: ServiceLevelObjectiveQuery;
  /**
   * A list of tags associated with this service level objective.
   * Always included in service level objective responses (but may be empty).
   * Optional in create/update requests.
   */
  "tags"?: Array<string>;
  /**
   * The target threshold such that when the service level indicator is above this
   * threshold over the given timeframe, the objective is being met.
   */
  "targetThreshold"?: number;
  /**
   * The thresholds (timeframes and associated targets) for this service level
   * objective object.
   */
  "thresholds"?: Array<SLOThreshold>;
  /**
   * The SLO time window options.
   */
  "timeframe"?: SLOTimeframe;
  /**
   * The type of the service level objective.
   */
  "type"?: SLOType;
  /**
   * The optional warning threshold such that when the service level indicator is
   * below this value for the given threshold, but above the target threshold, the
   * objective appears in a "warning" state. This value must be greater than the target
   * threshold.
   */
  "warningThreshold"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    configuredAlertIds: {
      baseName: "configured_alert_ids",
      type: "Array<number>",
      format: "int64",
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      format: "int64",
    },
    creator: {
      type: "Creator",
    },
    description: {
      type: "string",
    },
    groups: {
      type: "Array<string>",
    },
    id: {
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
    monitorTags: {
      baseName: "monitor_tags",
      type: "Array<string>",
    },
    name: {
      type: "string",
    },
    query: {
      type: "ServiceLevelObjectiveQuery",
    },
    tags: {
      type: "Array<string>",
    },
    targetThreshold: {
      baseName: "target_threshold",
      type: "number",
      format: "double",
    },
    thresholds: {
      type: "Array<SLOThreshold>",
    },
    timeframe: {
      type: "SLOTimeframe",
    },
    type: {
      type: "SLOType",
    },
    warningThreshold: {
      baseName: "warning_threshold",
      type: "number",
      format: "double",
    },
  };
}
