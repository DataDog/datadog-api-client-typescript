import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationServiceSettingsAttributes } from "./TestOptimizationServiceSettingsAttributes";
import { TestOptimizationServiceSettingsType } from "./TestOptimizationServiceSettingsType";

/**
 * Data object for Test Optimization service settings response.
 */
export class TestOptimizationServiceSettingsData {
  /**
   * Attributes for Test Optimization service settings.
   */
  "attributes"?: TestOptimizationServiceSettingsAttributes;
  /**
   * Unique identifier for the service settings.
   */
  "id"?: string;
  /**
   * JSON:API type for service settings response.
   * The value must always be `test_optimization_service_settings`.
   */
  "type"?: TestOptimizationServiceSettingsType;
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
      type: "TestOptimizationServiceSettingsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TestOptimizationServiceSettingsType",
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
    return TestOptimizationServiceSettingsData.attributeTypeMap;
  }

  public constructor() {}
}
