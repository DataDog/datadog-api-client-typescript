/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TraceStreamQuery } from "./TraceStreamQuery";
import { TraceStreamRequestColumnsItems } from "./TraceStreamRequestColumnsItems";
import { TraceStreamRequestResponseFormat } from "./TraceStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TraceStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<TraceStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": TraceStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": TraceStreamRequestResponseFormat;

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
      type: "Array<TraceStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "TraceStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TraceStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TraceStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
