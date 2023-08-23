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
export class Event {
  /**
   * If an alert event is enabled, set its type.
   * For example, `error`, `warning`, `info`, `success`, `user_update`,
   * `recommendation`, and `snapshot`.
   */
  "alertType"?: EventAlertType;
  /**
   * POSIX timestamp of the event. Must be sent as an integer (that is no quotes).
   * Limited to events no older than 18 hours.
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
   * Integer ID of the event.
   */
  "id"?: number;
  /**
   * Handling IDs as large 64-bit numbers can cause loss of accuracy issues with some programming languages.
   * Instead, use the string representation of the Event ID to avoid losing accuracy.
   */
  "idStr"?: string;
  /**
   * Payload of the event.
   */
  "payload"?: string;
  /**
   * The priority of the event. For example, `normal` or `low`.
   */
  "priority"?: EventPriority;
  /**
   * The type of event being posted. Option examples include nagios, hudson, jenkins, my_apps, chef, puppet, git, bitbucket, etc.
   * The list of standard source attribute values [available here](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
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
  "text"?: string;
  /**
   * The event title.
   */
  "title"?: string;
  /**
   * URL of the event.
   */
  "url"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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
      type: "string",
    },
    id: {
      type: "number",
      format: "int64",
    },
    idStr: {
      baseName: "id_str",
      type: "string",
    },
    payload: {
      type: "string",
    },
    priority: {
      type: "EventPriority",
    },
    sourceTypeName: {
      baseName: "source_type_name",
      type: "string",
    },
    tags: {
      type: "Array<string>",
    },
    text: {
      type: "string",
    },
    title: {
      type: "string",
    },
    url: {
      type: "string",
    },
  };
}
