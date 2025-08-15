/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget";
import { ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions } from "./ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Excludes specific fields from sensitive data scanning.
 */
export class ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude {
  /**
   * Fields to which the scope rule applies.
   */
  "options": ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions;
  /**
   * Excludes specific fields from processing.
   */
  "target": ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget;

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
    options: {
      baseName: "options",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeOptions",
      required: true,
    },
    target: {
      baseName: "target",
      type: "ObservabilityPipelineSensitiveDataScannerProcessorScopeExcludeTarget",
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
    return ObservabilityPipelineSensitiveDataScannerProcessorScopeExclude.attributeTypeMap;
  }

  public constructor() {}
}
