/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventAlertType } from "./EventAlertType";
import { EventPriority } from "./EventPriority";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing an event.
 */
export class EventCreateRequest {
  /**
   * An arbitrary string to use for aggregation. Limited to 100 characters.
   * If you specify a key, all events using that key are grouped together in the Event Stream.
   */
  "aggregationKey"?: string;
  /**
   * If an alert event is enabled, set its type.
   * For example, `error`, `warning`, `info`, `success`, `user_update`,
   * `recommendation`, and `snapshot`.
   */
  "alertType"?: EventAlertType;
  /**
   * POSIX timestamp of the event. Must be sent as an integer (that is no quotes).
   * Limited to events no older than 18 hours
   */
  "dateHappened"?: number;
  /**
   * A device name.
   */
  "deviceName"?: string;
  /**
   * Host name to associate with the event.
   * Any tags associated with the host are also applied to this event.
   */
  "host"?: string;
  /**
   * The priority of the event. For example, `normal` or `low`.
   */
  "priority"?: EventPriority;
  /**
   * ID of the parent event. Must be sent as an integer (that is no quotes).
   */
  "relatedEventId"?: number;
  /**
   * The type of event being posted. Option examples include nagios, hudson, jenkins, my_apps, chef, puppet, git, bitbucket, etc.
   * A complete list of source attribute values [available here](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   */
  "sourceTypeName"?: string;
  /**
   * A list of tags to apply to the event.
   */
  "tags"?: Array<string>;
  /**
   * The body of the event. Limited to 4000 characters. The text supports markdown.
   * To use markdown in the event text, start the text block with `%%% \n` and end the text block with `\n %%%`.
   * Use `msg_text` with the Datadog Ruby library.
   */
  "text": string;
  /**
   * The event title.
   */
  "title": string;

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
    alertType: {
      baseName: "alert_type",
      type: "EventAlertType",
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
    host: {
      baseName: "host",
      type: "string",
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
    sourceTypeName: {
      baseName: "source_type_name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    text: {
      baseName: "text",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
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
    return EventCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
