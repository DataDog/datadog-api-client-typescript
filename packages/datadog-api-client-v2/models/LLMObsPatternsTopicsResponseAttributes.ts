/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPatternsConfigSnapshot } from "./LLMObsPatternsConfigSnapshot";
import { LLMObsPatternsTopic } from "./LLMObsPatternsTopic";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an LLM Observability patterns topics response.
 */
export class LLMObsPatternsTopicsResponseAttributes {
  /**
   * Timestamp when the run completed. Null if the run has not completed.
   */
  "completedAt"?: Date;
  /**
   * Identifier of the configuration that produced the run.
   */
  "configId": string;
  /**
   * Snapshot of the configuration used for a patterns run.
   */
  "configSnapshot"?: LLMObsPatternsConfigSnapshot;
  /**
   * Timestamp when the run was created.
   */
  "createdAt": Date;
  /**
   * Identifier of the run that completed immediately before this one. Empty if none.
   */
  "previousRunId": string;
  /**
   * Identifier of the run that produced the topics.
   */
  "runId": string;
  /**
   * List of discovered topics.
   */
  "topics": Array<LLMObsPatternsTopic>;

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
    completedAt: {
      baseName: "completed_at",
      type: "Date",
      format: "date-time",
    },
    configId: {
      baseName: "config_id",
      type: "string",
      required: true,
    },
    configSnapshot: {
      baseName: "config_snapshot",
      type: "LLMObsPatternsConfigSnapshot",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    previousRunId: {
      baseName: "previous_run_id",
      type: "string",
      required: true,
    },
    runId: {
      baseName: "run_id",
      type: "string",
      required: true,
    },
    topics: {
      baseName: "topics",
      type: "Array<LLMObsPatternsTopic>",
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
    return LLMObsPatternsTopicsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
