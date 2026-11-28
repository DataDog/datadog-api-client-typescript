/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsContext {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "contextEvent"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "toEvent"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contextEvent: {
      baseName: "context_event",
      type: "string",
    },
    toEvent: {
      baseName: "to_event",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsContext.attributeTypeMap;
  }

  public constructor() {}
}
