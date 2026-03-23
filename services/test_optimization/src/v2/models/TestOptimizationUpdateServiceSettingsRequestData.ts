import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TestOptimizationUpdateServiceSettingsRequestAttributes } from "./TestOptimizationUpdateServiceSettingsRequestAttributes";
import { TestOptimizationUpdateServiceSettingsRequestDataType } from "./TestOptimizationUpdateServiceSettingsRequestDataType";

/**
 * Data object for update service settings request.
 */
export class TestOptimizationUpdateServiceSettingsRequestData {
  /**
   * Attributes for updating Test Optimization service settings.
   * All non-required fields are optional; only provided fields will be updated.
   */
  "attributes": TestOptimizationUpdateServiceSettingsRequestAttributes;
  /**
   * JSON:API type for update service settings request.
   * The value must always be `test_optimization_update_service_settings_request`.
   */
  "type": TestOptimizationUpdateServiceSettingsRequestDataType;
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
      type: "TestOptimizationUpdateServiceSettingsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TestOptimizationUpdateServiceSettingsRequestDataType",
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
    return TestOptimizationUpdateServiceSettingsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
