/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDataAttributes } from "./ObservabilityPipelineDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Contains the the pipeline configuration.
 */
export class ObservabilityPipelineSpecData {
  /**
   * Defines the pipeline’s name and its components (sources, processors, and destinations).
   */
  "attributes": ObservabilityPipelineDataAttributes;
  /**
   * The resource type identifier. For pipeline resources, this should always be set to `pipelines`.
   */
  "type": string;

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
      type: "ObservabilityPipelineDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return ObservabilityPipelineSpecData.attributeTypeMap;
  }

  public constructor() {}
}
