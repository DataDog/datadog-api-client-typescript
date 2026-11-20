/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompositeReferentialDataQueryComputeItemsAggregation } from "./CompositeReferentialDataQueryComputeItemsAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeReferentialDataQueryComputeItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": CompositeReferentialDataQueryComputeItemsAggregation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "CompositeReferentialDataQueryComputeItemsAggregation",
      required: true,
    },
    column: {
      baseName: "column",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompositeReferentialDataQueryComputeItems.attributeTypeMap;
  }

  public constructor() {}
}
