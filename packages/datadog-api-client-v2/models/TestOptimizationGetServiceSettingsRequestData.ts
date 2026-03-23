/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TestOptimizationGetServiceSettingsRequestAttributes } from "./TestOptimizationGetServiceSettingsRequestAttributes";
import { TestOptimizationGetServiceSettingsRequestDataType } from "./TestOptimizationGetServiceSettingsRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
