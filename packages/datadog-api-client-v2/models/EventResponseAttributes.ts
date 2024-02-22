/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventAttributes } from "./EventAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object description of an event response attribute.
 */
export class EventResponseAttributes {
  /**
   * Object description of attributes from your event.
   */
  "attributes"?: EventAttributes;
  /**
   * The message of the event.
   */
  "message"?: string;
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
    message: {
      baseName: "message",
      type: "string",
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
      type: "any",
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
