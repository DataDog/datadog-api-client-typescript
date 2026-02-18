/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Count of integrations by type.
 */
export class IntegrationCounts {
  /**
   * The filtered count of integrations.
   */
  "filteredCount"?: number;
  /**
   * The integration type.
   */
  "integrationType"?: string;
  /**
   * The total count of integrations.
   */
  "totalCount"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filteredCount: {
      baseName: "filtered_count",
      type: "number",
      format: "int64",
    },
    integrationType: {
      baseName: "integration_type",
      type: "string",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IntegrationCounts.attributeTypeMap;
  }

  public constructor() {}
}
