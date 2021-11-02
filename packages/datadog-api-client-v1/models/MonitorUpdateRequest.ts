/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from "./Creator";
import { MonitorOptions } from "./MonitorOptions";
import { MonitorOverallStates } from "./MonitorOverallStates";
import { MonitorState } from "./MonitorState";
import { MonitorType } from "./MonitorType";

export class MonitorUpdateRequest {
  /**
   * Timestamp of the monitor creation.
   */
  "created"?: Date;
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
  "options"?: MonitorOptions;
  "overallState"?: MonitorOverallStates;
  /**
   * Integer from 1 (high) to 5 (low) indicating alert severity.
   */
  "priority"?: number;
  /**
   * The monitor query.
   */
  "query"?: string;
  /**
   * A list of role identifiers that can be pulled from the Roles API. Cannot be used with `locked` option.
   */
  "restrictedRoles"?: Array<string>;
  "state"?: MonitorState;
  /**
   * Tags associated to your monitor.
   */
  "tags"?: Array<string>;
  "type"?: MonitorType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
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
    },
  };

  static getAttributeTypeMap() {
    return MonitorUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
