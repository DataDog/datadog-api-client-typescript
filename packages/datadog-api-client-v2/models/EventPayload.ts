/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventCategory } from "./EventCategory";
import { EventPayloadAttributes } from "./EventPayloadAttributes";
import { EventPayloadIntegrationId } from "./EventPayloadIntegrationId";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Event attributes.
 */
export class EventPayload {
  /**
   * A string used for aggregation when [correlating](https://docs.datadoghq.com/service_management/events/correlation/) events. If you specify a key, events are deduplicated to alerts based on this key. Limited to 100 characters.
   */
  "aggregationKey"?: string;
  /**
   * JSON object for category-specific attributes. Schema is different per event category.
   */
  "attributes": EventPayloadAttributes;
  /**
   * Event category identifying the type of event.
   */
  "category": EventCategory;
  /**
   * Host name to associate with the event. Any tags associated with the host are also applied to this event. Limited to 255 characters.
   */
  "host"?: string;
  /**
   * Integration ID sourced from integration manifests.
   */
  "integrationId"?: EventPayloadIntegrationId;
  /**
   * Free formed text associated with the event. It's suggested to use `data.attributes.attributes.custom` for well-structured attributes. Limited to 4000 characters.
   */
  "message"?: string;
  /**
   * A list of tags associated with the event. Maximum of 100 tags allowed.
   * Refer to [Tags docs](https://docs.datadoghq.com/getting_started/tagging/).
   */
  "tags"?: Array<string>;
  /**
   * Timestamp when the event occurred. Must follow [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
   * For example `"2017-01-15T01:30:15.010000Z"`.
   * Defaults to the timestamp of receipt. Limited to values no older than 18 hours.
   */
  "timestamp"?: string;
  /**
   * The title of the event. Limited to 500 characters.
   */
  "title": string;

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
      type: "EventPayloadAttributes",
      required: true,
    },
    category: {
      baseName: "category",
      type: "EventCategory",
      required: true,
    },
    host: {
      baseName: "host",
      type: "string",
    },
    integrationId: {
      baseName: "integration_id",
      type: "EventPayloadIntegrationId",
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventPayload.attributeTypeMap;
  }

  public constructor() {}
}
