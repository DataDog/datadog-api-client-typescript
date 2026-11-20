/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisDestructureColumnsItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "keys": Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sourceColumn": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "targetColumn": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    keys: {
      baseName: "keys",
      type: "Array<string>",
      required: true,
    },
    sourceColumn: {
      baseName: "source_column",
      type: "string",
      required: true,
    },
    targetColumn: {
      baseName: "target_column",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisDestructureColumnsItems.attributeTypeMap;
  }

  public constructor() {}
}
