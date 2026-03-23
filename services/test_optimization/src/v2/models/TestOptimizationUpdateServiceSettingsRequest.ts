import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationUpdateServiceSettingsRequestData } from "./TestOptimizationUpdateServiceSettingsRequestData";

/**
 * Request object for updating Test Optimization service settings.
 */
export class TestOptimizationUpdateServiceSettingsRequest {
  /**
   * Data object for update service settings request.
   */
  "data": TestOptimizationUpdateServiceSettingsRequestData;
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
      type: "TestOptimizationUpdateServiceSettingsRequestData",
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
    return TestOptimizationUpdateServiceSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
