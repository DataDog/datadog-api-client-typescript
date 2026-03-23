import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationGetServiceSettingsRequestData } from "./TestOptimizationGetServiceSettingsRequestData";

/**
 * Request object for getting Test Optimization service settings.
 */
export class TestOptimizationGetServiceSettingsRequest {
  /**
   * Data object for get service settings request.
   */
  "data": TestOptimizationGetServiceSettingsRequestData;
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
      type: "TestOptimizationGetServiceSettingsRequestData",
      required: true,
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
    return TestOptimizationGetServiceSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
