/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventCategory } from "./EventCategory";
import { EventPayloadAttributes } from "./EventPayloadAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Event attributes.
*/
export class EventPayload {
  /**
   * An arbitrary string to use for aggregation when correlating events. Limited to 100 characters.
  */
  "aggregationKey"?: string;
  /**
   * JSON object for custom attributes. Schema are different per each event category.
  */
  "attributes": EventPayloadAttributes;
  /**
   * Event category to identify the type of event. Only the value `change` is supported. Support for other categories are coming. please reach out to datadog support if you're interested.
  */
  "category": EventCategory;
  /**
   * The body of the event. Limited to 4000 characters.
  */
  "message"?: string;
  /**
   * A list of tags to apply to the event.
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
    "aggregationKey": {
      "baseName": "aggregation_key",
      "type": "string",
    },
    "attributes": {
      "baseName": "attributes",
      "type": "EventPayloadAttributes",
      "required": true,
    },
    "category": {
      "baseName": "category",
      "type": "EventCategory",
      "required": true,
    },
    "message": {
      "baseName": "message",
      "type": "string",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "timestamp": {
      "baseName": "timestamp",
      "type": "string",
    },
    "title": {
      "baseName": "title",
      "type": "string",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return EventPayload.attributeTypeMap;

  }

  public constructor() {











  }
}









