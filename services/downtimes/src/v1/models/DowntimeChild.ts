import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeRecurrence } from "./DowntimeRecurrence";
import { NotifyEndState } from "./NotifyEndState";
import { NotifyEndType } from "./NotifyEndType";

/**
 * The downtime object definition of the active child for the original parent recurring downtime. This
 * field will only exist on recurring downtimes.
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
   * `0` for a downtime applied on `*` or all,
   * `1` when the downtime is only scoped to hosts,
   * or `2` when the downtime is scoped to anything but hosts.
   */
  "downtimeType"?: number;
  /**
   * POSIX timestamp to end the downtime. If not provided,
   * the downtime is in effect indefinitely until you cancel it.
   */
  "end"?: number;
  /**
   * The downtime ID.
   */
  "id"?: number;
  /**
   * A message to include with notifications for this downtime.
   * Email notifications can be sent to specific users by using the same `@username` notation as events.
   */
  "message"?: string;
  /**
   * A single monitor to which the downtime applies.
   * If not provided, the downtime applies to all monitors.
   */
  "monitorId"?: number;
  /**
   * A comma-separated list of monitor tags. For example, tags that are applied directly to monitors,
   * not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies.
   * The resulting downtime applies to monitors that match ALL provided monitor tags.
   * For example, `service:postgres` **AND** `team:frontend`.
   */
  "monitorTags"?: Array<string>;
  /**
   * If the first recovery notification during a downtime should be muted.
   */
  "muteFirstRecoveryNotification"?: boolean;
  /**
   * States for which `notify_end_types` sends out notifications for.
   */
  "notifyEndStates"?: Array<NotifyEndState>;
  /**
   * If set, notifies if a monitor is in an alert-worthy state (`ALERT`, `WARNING`, or `NO DATA`)
   * when this downtime expires or is canceled. Applied to monitors that change states during
   * the downtime (such as from `OK` to `ALERT`, `WARNING`, or `NO DATA`), and to monitors that
   * already have an alert-worthy state when downtime begins.
   */
  "notifyEndTypes"?: Array<NotifyEndType>;
  /**
   * ID of the parent Downtime.
   */
  "parentId"?: number;
  /**
   * An object defining the recurrence of the downtime.
   */
  "recurrence"?: DowntimeRecurrence;
  /**
   * The scope(s) to which the downtime applies and must be in `key:value` format. For example, `host:app2`.
   * Provide multiple scopes as a comma-separated list like `env:dev,env:prod`.
   * The resulting downtime applies to sources that matches ALL provided scopes (`env:dev` **AND** `env:prod`).
   */
  "scope"?: Array<string>;
  /**
   * POSIX timestamp to start the downtime.
   * If not provided, the downtime starts the moment it is created.
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
    active: {
      baseName: "active",
      type: "boolean",
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
    muteFirstRecoveryNotification: {
      baseName: "mute_first_recovery_notification",
      type: "boolean",
    },
    notifyEndStates: {
      baseName: "notify_end_states",
      type: "Array<NotifyEndState>",
    },
    notifyEndTypes: {
      baseName: "notify_end_types",
      type: "Array<NotifyEndType>",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeChild.attributeTypeMap;
  }

  public constructor() {}
}
