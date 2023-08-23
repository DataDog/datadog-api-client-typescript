/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Event } from "./Event";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing an event response.
 */
export class EventCreateResponse {
  /**
   * Object representing an event.
   */
  "event"?: Event;
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
    event: {
      type: "Event",
    },
    status: {
      type: "string",
    },
  };
}
