/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TestOptimizationServiceSettingsAttributes } from "./TestOptimizationServiceSettingsAttributes";
import { TestOptimizationServiceSettingsType } from "./TestOptimizationServiceSettingsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
