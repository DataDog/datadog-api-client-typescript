/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StructuredAnalysisProjectionColumnsItems } from "./StructuredAnalysisProjectionColumnsItems";
import { StructuredAnalysisProjectionType } from "./StructuredAnalysisProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<StructuredAnalysisProjectionColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisProjectionType;

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
      type: "Array<StructuredAnalysisProjectionColumnsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisProjection.attributeTypeMap;
  }

  public constructor() {}
}
