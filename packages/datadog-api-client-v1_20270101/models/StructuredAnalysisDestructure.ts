/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StructuredAnalysisDestructureColumnsItems } from "./StructuredAnalysisDestructureColumnsItems";
import { StructuredAnalysisDestructureType } from "./StructuredAnalysisDestructureType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisDestructure {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<StructuredAnalysisDestructureColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisDestructureType;

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
      type: "Array<StructuredAnalysisDestructureColumnsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisDestructureType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisDestructure.attributeTypeMap;
  }

  public constructor() {}
}
