import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationGetServiceSettingsRequestAttributes } from "./TestOptimizationGetServiceSettingsRequestAttributes";
import { TestOptimizationGetServiceSettingsRequestDataType } from "./TestOptimizationGetServiceSettingsRequestDataType";

/**
 * Data object for get service settings request.
 */
export class TestOptimizationGetServiceSettingsRequestData {
  /**
   * Attributes for requesting Test Optimization service settings.
   */
  "attributes": TestOptimizationGetServiceSettingsRequestAttributes;
  /**
   * JSON:API type for get service settings request.
   * The value must always be `test_optimization_get_service_settings_request`.
   */
  "type": TestOptimizationGetServiceSettingsRequestDataType;
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
    attributes: {
      baseName: "attributes",
      type: "TestOptimizationGetServiceSettingsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TestOptimizationGetServiceSettingsRequestDataType",
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
    return TestOptimizationGetServiceSettingsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
