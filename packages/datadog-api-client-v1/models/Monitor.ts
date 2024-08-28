/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Creator } from "./Creator";
import { MatchingDowntime } from "./MatchingDowntime";
import { MonitorOptions } from "./MonitorOptions";
import { MonitorOverallStates } from "./MonitorOverallStates";
import { MonitorState } from "./MonitorState";
import { MonitorType } from "./MonitorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing a monitor.
 */
export class Monitor {
  /**
   * Timestamp of the monitor creation.
   */
  "created"?: Date;
  /**
   * Object describing the creator of the shared element.
   */
  "creator"?: Creator;
  /**
   * Whether or not the monitor is deleted. (Always `null`)
   */
  "deleted"?: Date;
  /**
   * ID of this monitor.
   */
  "id"?: number;
  /**
   * A list of active v1 downtimes that match this monitor.
   */
  "matchingDowntimes"?: Array<MatchingDowntime>;
  /**
   * A message to include with notifications for this monitor.
   */
  "message"?: string;
  /**
   * Last timestamp when the monitor was edited.
   */
  "modified"?: Date;
  /**
   * Whether or not the monitor is broken down on different groups.
   */
  "multi"?: boolean;
  /**
   * The monitor name.
   */
  "name"?: string;
  /**
   * List of options associated with your monitor.
   */
  "options"?: MonitorOptions;
  /**
   * The different states your monitor can be in.
   */
  "overallState"?: MonitorOverallStates;
  /**
   * Integer from 1 (high) to 5 (low) indicating alert severity.
   */
  "priority"?: number;
  /**
   * The monitor query.
   */
  "query": string;
  /**
   * A list of unique role identifiers to define which roles are allowed to edit the monitor. The unique identifiers for all roles can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) and are located in the `data.id` field. Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. You can use the [Restriction Policies API](https://docs.datadoghq.com/api/latest/restriction-policies/) to manage write authorization for individual monitors by teams and users, in addition to roles.
   */
  "restrictedRoles"?: Array<string>;
  /**
   * Wrapper object with the different monitor states.
   */
  "state"?: MonitorState;
  /**
   * Tags associated to your monitor.
   */
  "tags"?: Array<string>;
  /**
   * The type of the monitor. For more information about `type`, see the [monitor options](https://docs.datadoghq.com/monitors/guide/monitor_api_options/) docs.
   */
  "type": MonitorType;

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
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    creator: {
      baseName: "creator",
      type: "Creator",
    },
    deleted: {
      baseName: "deleted",
      type: "Date",
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    matchingDowntimes: {
      baseName: "matching_downtimes",
      type: "Array<MatchingDowntime>",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    multi: {
      baseName: "multi",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    options: {
      baseName: "options",
      type: "MonitorOptions",
    },
    overallState: {
      baseName: "overall_state",
      type: "MonitorOverallStates",
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    restrictedRoles: {
      baseName: "restricted_roles",
      type: "Array<string>",
    },
    state: {
      baseName: "state",
      type: "MonitorState",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "MonitorType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Monitor.attributeTypeMap;
  }

  public constructor() {}
}
