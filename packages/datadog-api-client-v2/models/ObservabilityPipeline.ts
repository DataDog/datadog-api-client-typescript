/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineData } from "./ObservabilityPipelineData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Top-level schema representing a pipeline.
 */
export class ObservabilityPipeline {
  /**
   * Contains the pipeline’s ID, type, and configuration attributes.
   */
  "data": ObservabilityPipelineData;

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
      type: "ObservabilityPipelineData",
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
    return ObservabilityPipeline.attributeTypeMap;
  }

  public constructor() {}
}
