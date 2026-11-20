/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DoraListStreamQuery } from "./DoraListStreamQuery";
import { DoraListStreamRequestColumnsItems } from "./DoraListStreamRequestColumnsItems";
import { DoraListStreamRequestResponseFormat } from "./DoraListStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DoraListStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<DoraListStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": DoraListStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": DoraListStreamRequestResponseFormat;

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
      type: "Array<DoraListStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "DoraListStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "DoraListStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DoraListStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
