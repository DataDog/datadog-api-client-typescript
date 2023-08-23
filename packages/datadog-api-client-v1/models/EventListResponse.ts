/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Event } from "./Event";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An event list response.
 */
export class EventListResponse {
  /**
   * An array of events.
   */
  "events"?: Array<Event>;
  /**
   * A status.
   */
  "status"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    events: {
      type: "Array<Event>",
    },
    status: {
      type: "string",
    },
  };
}
