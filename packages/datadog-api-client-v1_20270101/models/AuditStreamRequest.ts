/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuditStreamQuery } from "./AuditStreamQuery";
import { AuditStreamRequestColumnsItems } from "./AuditStreamRequestColumnsItems";
import { AuditStreamRequestResponseFormat } from "./AuditStreamRequestResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AuditStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<AuditStreamRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": AuditStreamQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": AuditStreamRequestResponseFormat;

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
      type: "Array<AuditStreamRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "AuditStreamQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "AuditStreamRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
