/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Applies scanning across all available fields.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorScopeAll {
  /**
   * Applies the rule to all fields.
   */
  "target": ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget;

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
    target: {
      baseName: "target",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeAllTarget",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineSensitiveDataScannerProcessorScopeAll.attributeTypeMap;
  }

  public constructor() {}
}
