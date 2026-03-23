import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationDeleteServiceSettingsRequestData } from "./TestOptimizationDeleteServiceSettingsRequestData";

/**
 * Request object for deleting Test Optimization service settings.
 */
export class TestOptimizationDeleteServiceSettingsRequest {
  /**
   * Data object for delete service settings request.
   */
  "data": TestOptimizationDeleteServiceSettingsRequestData;
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
      type: "TestOptimizationDeleteServiceSettingsRequestData",
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
    return TestOptimizationDeleteServiceSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
