/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A comparison that selects metric data by a property or measure.
 */
export class ExperimentsMetricPropertyFilter {
  /**
   * ID of the measure evaluated by the filter.
   */
  "measureId"?: string;
  /**
   * Comparison applied by the filter.
   */
  "operation"?: string;
  /**
   * ID of the property evaluated by the filter.
   */
  "propertyId"?: string;
  /**
   * Values used by the filter's comparison.
   */
  "values"?: Array<string>;

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
    measureId: {
      baseName: "measure_id",
      type: "string",
    },
    operation: {
      baseName: "operation",
      type: "string",
    },
    propertyId: {
      baseName: "property_id",
      type: "string",
    },
    values: {
      baseName: "values",
      type: "Array<string>",
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
    return ExperimentsMetricPropertyFilter.attributeTypeMap;
  }

  public constructor() {}
}
