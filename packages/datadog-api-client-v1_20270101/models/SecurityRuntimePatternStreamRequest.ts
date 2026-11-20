/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityRuntimePatternStreamQuery } from "./SecurityRuntimePatternStreamQuery";
import { SecurityRuntimePatternStreamRequestColumnsItems } from "./SecurityRuntimePatternStreamRequestColumnsItems";
import { SecurityRuntimePatternStreamRequestResponseFormat } from "./SecurityRuntimePatternStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SecurityRuntimePatternStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<SecurityRuntimePatternStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": SecurityRuntimePatternStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": SecurityRuntimePatternStreamRequestResponseFormat;

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
      type: "Array<SecurityRuntimePatternStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "SecurityRuntimePatternStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "SecurityRuntimePatternStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityRuntimePatternStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
