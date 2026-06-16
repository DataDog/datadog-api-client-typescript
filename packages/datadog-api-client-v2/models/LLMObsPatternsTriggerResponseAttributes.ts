/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an LLM Observability patterns trigger response.
 */
export class LLMObsPatternsTriggerResponseAttributes {
  /**
   * The ID of the patterns configuration that was run.
   */
  "configId": string;
  /**
   * The ID of the patterns run that was started.
   */
  "runId": string;
  /**
   * Status of the patterns run.
   */
  "status": string;

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
    configId: {
      baseName: "config_id",
      type: "string",
      required: true,
    },
    runId: {
      baseName: "run_id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
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
    return LLMObsPatternsTriggerResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
