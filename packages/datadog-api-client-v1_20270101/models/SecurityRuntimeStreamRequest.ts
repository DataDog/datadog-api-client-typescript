/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityRuntimeStreamQuery } from "./SecurityRuntimeStreamQuery";
import { SecurityRuntimeStreamRequestColumnsItems } from "./SecurityRuntimeStreamRequestColumnsItems";
import { SecurityRuntimeStreamRequestResponseFormat } from "./SecurityRuntimeStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SecurityRuntimeStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<SecurityRuntimeStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": SecurityRuntimeStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": SecurityRuntimeStreamRequestResponseFormat;

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
      type: "Array<SecurityRuntimeStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "SecurityRuntimeStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "SecurityRuntimeStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityRuntimeStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
