/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TestOptimizationDeleteServiceSettingsRequestAttributes } from "./TestOptimizationDeleteServiceSettingsRequestAttributes";
import { TestOptimizationDeleteServiceSettingsRequestDataType } from "./TestOptimizationDeleteServiceSettingsRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for delete service settings request.
 */
export class TestOptimizationDeleteServiceSettingsRequestData {
  /**
   * Attributes for deleting Test Optimization service settings.
   */
  "attributes": TestOptimizationDeleteServiceSettingsRequestAttributes;
  /**
   * JSON:API type for delete service settings request.
   * The value must always be `test_optimization_delete_service_settings_request`.
   */
  "type": TestOptimizationDeleteServiceSettingsRequestDataType;

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
      type: "TestOptimizationDeleteServiceSettingsRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TestOptimizationDeleteServiceSettingsRequestDataType",
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
    return TestOptimizationDeleteServiceSettingsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
