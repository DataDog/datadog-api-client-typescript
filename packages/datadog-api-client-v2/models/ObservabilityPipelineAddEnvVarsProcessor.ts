/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAddEnvVarsProcessorType } from "./ObservabilityPipelineAddEnvVarsProcessorType";
import { ObservabilityPipelineAddEnvVarsProcessorVariable } from "./ObservabilityPipelineAddEnvVarsProcessorVariable";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `add_env_vars` processor adds environment variable values to log events.
 */
export class ObservabilityPipelineAddEnvVarsProcessor {
  /**
   * The unique identifier for this component. Used to reference this processor in the pipeline.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the input for this processor.
   */
  "inputs": Array<string>;
  /**
   * The processor type. The value should always be `add_env_vars`.
   */
  "type": ObservabilityPipelineAddEnvVarsProcessorType;
  /**
   * A list of environment variable mappings to apply to log fields.
   */
  "variables": Array<ObservabilityPipelineAddEnvVarsProcessorVariable>;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAddEnvVarsProcessorType",
      required: true,
    },
    variables: {
      baseName: "variables",
      type: "Array<ObservabilityPipelineAddEnvVarsProcessorVariable>",
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
    return ObservabilityPipelineAddEnvVarsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
