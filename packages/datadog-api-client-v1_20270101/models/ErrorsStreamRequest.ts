/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ErrorsStreamQuery } from "./ErrorsStreamQuery";
import { ErrorsStreamRequestColumnsItems } from "./ErrorsStreamRequestColumnsItems";
import { ErrorsStreamRequestResponseFormat } from "./ErrorsStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ErrorsStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<ErrorsStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": ErrorsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ErrorsStreamRequestResponseFormat;

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
      type: "Array<ErrorsStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "ErrorsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ErrorsStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ErrorsStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
