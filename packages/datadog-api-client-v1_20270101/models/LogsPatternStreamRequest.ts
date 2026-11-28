/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsPatternStreamQuery } from "./LogsPatternStreamQuery";
import { LogsPatternStreamRequestColumnsItems } from "./LogsPatternStreamRequestColumnsItems";
import { LogsPatternStreamRequestResponseFormat } from "./LogsPatternStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogsPatternStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<LogsPatternStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": LogsPatternStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": LogsPatternStreamRequestResponseFormat;

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
      type: "Array<LogsPatternStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "LogsPatternStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "LogsPatternStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsPatternStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
