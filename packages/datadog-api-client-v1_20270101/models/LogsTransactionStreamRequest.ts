/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsTransactionStreamQuery } from "./LogsTransactionStreamQuery";
import { LogsTransactionStreamRequestColumnsItems } from "./LogsTransactionStreamRequestColumnsItems";
import { LogsTransactionStreamRequestResponseFormat } from "./LogsTransactionStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogsTransactionStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<LogsTransactionStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": LogsTransactionStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": LogsTransactionStreamRequestResponseFormat;

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
      type: "Array<LogsTransactionStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "LogsTransactionStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "LogsTransactionStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsTransactionStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
