/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListStreamComputeAggregation } from "./ListStreamComputeAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of facets and aggregations which to compute.
 */
export class ListStreamComputeItems {
  /**
   * Aggregation value.
   */
  "aggregation": ListStreamComputeAggregation;
  /**
   * Facet name.
   */
  "facet"?: string;

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
    aggregation: {
      baseName: "aggregation",
      type: "ListStreamComputeAggregation",
      required: true,
    },
    facet: {
      baseName: "facet",
      type: "string",
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
    return ListStreamComputeItems.attributeTypeMap;
  }

  public constructor() {}
}
