/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Event } from "./Event";
import { EventPriority } from "./EventPriority";
import { EventStatusType } from "./EventStatusType";
import { MonitorType } from "./MonitorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object description of attributes from your event.
 */
export class EventAttributes {
  /**
   * Aggregation key of the event.
   */
  "aggregationKey"?: string;
  /**
   * POSIX timestamp of the event. Must be sent as an integer (no quotation marks).
   * Limited to events no older than 18 hours.
   */
  "dateHappened"?: number;
  /**
   * A device name.
   */
  "deviceName"?: string;
  /**
   * The duration between the triggering of the event and its recovery in nanoseconds.
   */
  "duration"?: number;
  /**
   * The event title.
   */
  "eventObject"?: string;
  /**
   * The metadata associated with a request.
   */
  "evt"?: Event;
  /**
   * Host name to associate with the event.
   * Any tags associated with the host are also applied to this event.
   */
  "hostname"?: string;
  /**
   * Attributes from the monitor that triggered the event.
   */
  "monitor"?: MonitorType;
  /**
   * List of groups referred to in the event.
   */
  "monitorGroups"?: Array<string>;
  /**
   * ID of the monitor that triggered the event. When an event isn't related to a monitor, this field is empty.
   */
  "monitorId"?: number;
  /**
   * The priority of the event's monitor. For example, `normal` or `low`.
   */
  "priority"?: EventPriority;
  /**
   * Related event ID.
   */
  "relatedEventId"?: number;
  /**
   * Service that triggered the event.
   */
  "service"?: string;
  /**
   * The type of event being posted.
   * For example, `nagios`, `hudson`, `jenkins`, `my_apps`, `chef`, `puppet`, `git` or `bitbucket`.
   * The list of standard source attribute values is [available here](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   */
  "sourceTypeName"?: string;
  /**
   * Identifier for the source of the event, such as a monitor alert, an externally-submitted event, or an integration.
   */
  "sourcecategory"?: string;
  /**
   * If an alert event is enabled, its status is one of the following:
   * `failure`, `error`, `warning`, `info`, `success`, `user_update`,
   * `recommendation`, or `snapshot`.
   */
  "status"?: EventStatusType;
  /**
   * A list of tags to apply to the event.
   */
  "tags"?: Array<string>;
  /**
   * POSIX timestamp of your event in milliseconds.
   */
  "timestamp"?: number;
  /**
   * The event title.
   */
  "title"?: string;

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
    aggregationKey: {
      baseName: "aggregation_key",
      type: "string",
    },
    dateHappened: {
      baseName: "date_happened",
      type: "number",
      format: "int64",
    },
    deviceName: {
      baseName: "device_name",
      type: "string",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    eventObject: {
      baseName: "event_object",
      type: "string",
    },
    evt: {
      baseName: "evt",
      type: "Event",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    monitor: {
      baseName: "monitor",
      type: "MonitorType",
    },
    monitorGroups: {
      baseName: "monitor_groups",
      type: "Array<string>",
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      format: "int64",
    },
    priority: {
      baseName: "priority",
      type: "EventPriority",
    },
    relatedEventId: {
      baseName: "related_event_id",
      type: "number",
      format: "int64",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    sourceTypeName: {
      baseName: "source_type_name",
      type: "string",
    },
    sourcecategory: {
      baseName: "sourcecategory",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "EventStatusType",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "number",
      format: "int64",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return EventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
