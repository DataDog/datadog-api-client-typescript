/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DowntimeChild } from "./DowntimeChild";
import { DowntimeRecurrence } from "./DowntimeRecurrence";

export class Downtime {
  /**
   * If a scheduled downtime currently exists.
   */
  "active"?: boolean;
  "activeChild"?: DowntimeChild;
  /**
   * If a scheduled downtime is canceled.
   */
  "canceled"?: number;
  /**
   * User ID of the downtime creator.
   */
  "creatorId"?: number;
  /**
   * If a downtime has been disabled.
   */
  "disabled"?: boolean;
  /**
   * `0` for a downtime applied on `*` or all, `1` when the downtime is only scoped to hosts, or `2` when the downtime is scoped to anything but hosts.
   */
  "downtimeType"?: number;
  /**
   * POSIX timestamp to end the downtime. If not provided, the downtime is in effect indefinitely until you cancel it.
   */
  "end"?: number;
  /**
   * The downtime ID.
   */
  "id"?: number;
  /**
   * A message to include with notifications for this downtime. Email notifications can be sent to specific users by using the same `@username` notation as events.
   */
  "message"?: string;
  /**
   * A single monitor to which the downtime applies. If not provided, the downtime applies to all monitors.
   */
  "monitorId"?: number;
  /**
   * A comma-separated list of monitor tags. For example, tags that are applied directly to monitors, not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies. The resulting downtime applies to monitors that match ALL provided monitor tags. For example, `service:postgres` **AND** `team:frontend`.
   */
  "monitorTags"?: Array<string>;
  /**
   * ID of the parent Downtime.
   */
  "parentId"?: number;
  "recurrence"?: DowntimeRecurrence;
  /**
   * The scope(s) to which the downtime applies. For example, `host:app2`. Provide multiple scopes as a comma-separated list like `env:dev,env:prod`. The resulting downtime applies to sources that matches ALL provided scopes (`env:dev` **AND** `env:prod`).
   */
  "scope"?: Array<string>;
  /**
   * POSIX timestamp to start the downtime. If not provided, the downtime starts the moment it is created.
   */
  "start"?: number;
  /**
   * The timezone in which to display the downtime's start and end times in Datadog applications.
   */
  "timezone"?: string;
  /**
   * ID of the last user that updated the downtime.
   */
  "updaterId"?: number;

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
    active: {
      baseName: "active",
      type: "boolean",
    },
    activeChild: {
      baseName: "active_child",
      type: "DowntimeChild",
    },
    canceled: {
      baseName: "canceled",
      type: "number",

      format: "int64",
    },
    creatorId: {
      baseName: "creator_id",
      type: "number",

      format: "int32",
    },
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    downtimeType: {
      baseName: "downtime_type",
      type: "number",

      format: "int32",
    },
    end: {
      baseName: "end",
      type: "number",

      format: "int64",
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
    monitorId: {
      baseName: "monitor_id",
      type: "number",

      format: "int64",
    },
    monitorTags: {
      baseName: "monitor_tags",
      type: "Array<string>",
    },
    parentId: {
      baseName: "parent_id",
      type: "number",

      format: "int64",
    },
    recurrence: {
      baseName: "recurrence",
      type: "DowntimeRecurrence",
    },
    scope: {
      baseName: "scope",
      type: "Array<string>",
    },
    start: {
      baseName: "start",
      type: "number",

      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    updaterId: {
      baseName: "updater_id",
      type: "number",

      format: "int32",
    },
  };

  static getAttributeTypeMap() {
    return Downtime.attributeTypeMap;
  }

  public constructor() {}
}
