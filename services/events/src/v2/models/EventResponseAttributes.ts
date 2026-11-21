import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventAttributes } from "./EventAttributes";
import { EventStatusType } from "./EventStatusType";

/**
 * The object description of an event response attribute.
 */
export class EventResponseAttributes {
  /**
   * Object description of attributes from your event.
   */
  "attributes"?: EventAttributes;
  /**
   * The host associated with the event.
   */
  "host"?: string;
  /**
   * The message of the event.
   */
  "message"?: string;
  /**
   * The service associated with the event.
   */
  "service"?: string;
  /**
   * The event status. Legacy events can use `failure`, `error`, `warning`,
   * `info`, `success`, `user_update`, `recommendation`, or `snapshot`.
   * Alert events can use `error`, `warn`, or `ok`.
   */
  "status"?: EventStatusType;
  /**
   * An array of tags associated with the event.
   */
  "tags"?: Array<string>;
  /**
   * The timestamp of the event.
   */
  "timestamp"?: Date;
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
    attributes: {
      baseName: "attributes",
      type: "EventAttributes",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    service: {
      baseName: "service",
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
      type: "Date",
      format: "date-time",
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
    return EventResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
