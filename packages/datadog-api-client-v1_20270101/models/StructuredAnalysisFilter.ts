/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StructuredAnalysisFilterType } from "./StructuredAnalysisFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisFilter {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisFilterType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filter: {
      baseName: "filter",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisFilterType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisFilter.attributeTypeMap;
  }

  public constructor() {}
}
