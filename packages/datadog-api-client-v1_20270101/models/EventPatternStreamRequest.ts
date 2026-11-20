/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventPatternStreamQuery } from "./EventPatternStreamQuery";
import { EventPatternStreamRequestColumnsItems } from "./EventPatternStreamRequestColumnsItems";
import { EventPatternStreamRequestResponseFormat } from "./EventPatternStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventPatternStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<EventPatternStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": EventPatternStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": EventPatternStreamRequestResponseFormat;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<EventPatternStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "EventPatternStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "EventPatternStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventPatternStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
