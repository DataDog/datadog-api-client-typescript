/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEventCategory } from "./ChangeEventCategory";
import { ChangeEventCustomAttributes } from "./ChangeEventCustomAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object representing a change event.
 */
export class ChangeEvent {
  /**
   * An arbitrary string to use for aggregation. Limited to 100 characters.
   * If you specify a key, all events using that key are grouped together in the Event Stream.
   */
  "aggregationKey"?: string;
  /**
   * Object representing custom event attributes required for Change events. The overall object
   */
  "attributes": ChangeEventCustomAttributes;
  /**
   * Event category to identify the type of event. Currently only `change` value is supported.
   */
  "category": ChangeEventCategory;
  /**
   * The body of the event. Limited to 4000 characters. The text supports markdown.
   */
  "message"?: string;
  /**
   * A list of tags to apply to the event.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp in which the event occurred. Must follow [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
   * Defaults to now. Limited to events no older than 18 hours.
   */
  "timestamp"?: string;
  /**
   * The event title. Limited to 500 characters.
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
    attributes: {
      baseName: "attributes",
      type: "ChangeEventCustomAttributes",
      required: true,
    },
    category: {
      baseName: "category",
      type: "ChangeEventCategory",
      required: true,
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
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return ChangeEvent.attributeTypeMap;
  }

  public constructor() {}
}
