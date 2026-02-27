/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentSpanError } from "./LLMObsExperimentSpanError";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata associated with an experiment span.
 */
export class LLMObsExperimentSpanMeta {
  /**
   * Error details for an experiment span.
   */
  "error"?: LLMObsExperimentSpanError;
  /**
   * Expected output for the span, used for evaluation.
   */
  "expectedOutput"?: { [key: string]: any };
  /**
   * Input data passed to the span.
   */
  "input"?: { [key: string]: any };
  /**
   * Output data produced by the span.
   */
  "output"?: { [key: string]: any };

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
    error: {
      baseName: "error",
      type: "LLMObsExperimentSpanError",
    },
    expectedOutput: {
      baseName: "expected_output",
      type: "{ [key: string]: any; }",
    },
    input: {
      baseName: "input",
      type: "{ [key: string]: any; }",
    },
    output: {
      baseName: "output",
      type: "{ [key: string]: any; }",
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
    return LLMObsExperimentSpanMeta.attributeTypeMap;
  }

  public constructor() {}
}
