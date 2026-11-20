/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentsStreamQuery } from "./IncidentsStreamQuery";
import { IncidentsStreamRequestColumnsItems } from "./IncidentsStreamRequestColumnsItems";
import { IncidentsStreamRequestResponseFormat } from "./IncidentsStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class IncidentsStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<IncidentsStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": IncidentsStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": IncidentsStreamRequestResponseFormat;

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
      type: "Array<IncidentsStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "IncidentsStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "IncidentsStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentsStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
