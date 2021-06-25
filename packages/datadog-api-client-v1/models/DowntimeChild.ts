/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DowntimeRecurrence } from "./DowntimeRecurrence";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The downtime object definition of the active child for the original parent recurring downtime. This field will only exist on recurring downtimes.
 */

export class DowntimeChild {
  /**
   * If a scheduled downtime currently exists.
   */
  "active"?: boolean;
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

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    active: {
      baseName: "active",
      type: "boolean",
      format: "",
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
      format: "",
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
      format: "",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      format: "int64",
    },
    monitorTags: {
      baseName: "monitor_tags",
      type: "Array<string>",
      format: "",
    },
    parentId: {
      baseName: "parent_id",
      type: "number",
      format: "int64",
    },
    recurrence: {
      baseName: "recurrence",
      type: "DowntimeRecurrence",
      format: "",
    },
    scope: {
      baseName: "scope",
      type: "Array<string>",
      format: "",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
      format: "",
    },
    updaterId: {
      baseName: "updater_id",
      type: "number",
      format: "int32",
    },
  };

  static getAttributeTypeMap() {
    return DowntimeChild.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): DowntimeChild {
    const res = new DowntimeChild();

    res.active = ObjectSerializer.deserialize(data.active, "boolean", "");

    res.canceled = ObjectSerializer.deserialize(
      data.canceled,
      "number",
      "int64"
    );

    res.creatorId = ObjectSerializer.deserialize(
      data.creator_id,
      "number",
      "int32"
    );

    res.disabled = ObjectSerializer.deserialize(data.disabled, "boolean", "");

    res.downtimeType = ObjectSerializer.deserialize(
      data.downtime_type,
      "number",
      "int32"
    );

    res.end = ObjectSerializer.deserialize(data.end, "number", "int64");

    res.id = ObjectSerializer.deserialize(data.id, "number", "int64");

    res.message = ObjectSerializer.deserialize(data.message, "string", "");

    res.monitorId = ObjectSerializer.deserialize(
      data.monitor_id,
      "number",
      "int64"
    );

    res.monitorTags = ObjectSerializer.deserialize(
      data.monitor_tags,
      "Array<string>",
      ""
    );

    res.parentId = ObjectSerializer.deserialize(
      data.parent_id,
      "number",
      "int64"
    );

    res.recurrence = ObjectSerializer.deserialize(
      data.recurrence,
      "DowntimeRecurrence",
      ""
    );

    res.scope = ObjectSerializer.deserialize(data.scope, "Array<string>", "");

    res.start = ObjectSerializer.deserialize(data.start, "number", "int64");

    res.timezone = ObjectSerializer.deserialize(data.timezone, "string", "");

    res.updaterId = ObjectSerializer.deserialize(
      data.updater_id,
      "number",
      "int32"
    );

    return res;
  }

  static serialize(data: DowntimeChild): { [key: string]: any } {
    const attributeTypes = DowntimeChild.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.active = ObjectSerializer.serialize(data.active, "boolean", "");

    res.canceled = ObjectSerializer.serialize(data.canceled, "number", "int64");

    res.creator_id = ObjectSerializer.serialize(
      data.creatorId,
      "number",
      "int32"
    );

    res.disabled = ObjectSerializer.serialize(data.disabled, "boolean", "");

    res.downtime_type = ObjectSerializer.serialize(
      data.downtimeType,
      "number",
      "int32"
    );

    res.end = ObjectSerializer.serialize(data.end, "number", "int64");

    res.id = ObjectSerializer.serialize(data.id, "number", "int64");

    res.message = ObjectSerializer.serialize(data.message, "string", "");

    res.monitor_id = ObjectSerializer.serialize(
      data.monitorId,
      "number",
      "int64"
    );

    res.monitor_tags = ObjectSerializer.serialize(
      data.monitorTags,
      "Array<string>",
      ""
    );

    res.parent_id = ObjectSerializer.serialize(
      data.parentId,
      "number",
      "int64"
    );

    res.recurrence = ObjectSerializer.serialize(
      data.recurrence,
      "DowntimeRecurrence",
      ""
    );

    res.scope = ObjectSerializer.serialize(data.scope, "Array<string>", "");

    res.start = ObjectSerializer.serialize(data.start, "number", "int64");

    res.timezone = ObjectSerializer.serialize(data.timezone, "string", "");

    res.updater_id = ObjectSerializer.serialize(
      data.updaterId,
      "number",
      "int32"
    );

    return res;
  }

  public constructor() {}
}
