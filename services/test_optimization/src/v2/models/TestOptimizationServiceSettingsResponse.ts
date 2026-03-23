import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationServiceSettingsData } from "./TestOptimizationServiceSettingsData";

/**
 * Response object containing Test Optimization service settings.
 */
export class TestOptimizationServiceSettingsResponse {
  /**
   * Data object for Test Optimization service settings response.
   */
  "data"?: TestOptimizationServiceSettingsData;
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
    data: {
      baseName: "data",
      type: "TestOptimizationServiceSettingsData",
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
    return TestOptimizationServiceSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
