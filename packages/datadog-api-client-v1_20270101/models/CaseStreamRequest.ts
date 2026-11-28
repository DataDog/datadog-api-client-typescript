/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseStreamQuery } from "./CaseStreamQuery";
import { CaseStreamRequestColumnsItems } from "./CaseStreamRequestColumnsItems";
import { CaseStreamRequestResponseFormat } from "./CaseStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CaseStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<CaseStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": CaseStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": CaseStreamRequestResponseFormat;

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
      type: "Array<CaseStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "CaseStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "CaseStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
