import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsConfigSnapshot } from "./LLMObsPatternsConfigSnapshot";

/**
 * Summary of an LLM Observability patterns run.
 */
export class LLMObsPatternsRunSummary {
  /**
   * Timestamp when the run completed. Null if the run has not completed.
   */
  "completedAt"?: Date;
  /**
   * Snapshot of the configuration used for a patterns run.
   */
  "configSnapshot"?: LLMObsPatternsConfigSnapshot;
  /**
   * Timestamp when the run was created.
   */
  "createdAt": Date;
  /**
   * Unique identifier of the run.
   */
  "id": string;
  /**
   * Status of the run.
   */
  "status": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
    id: {
      baseName: "id",
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
    return LLMObsPatternsRunSummary.attributeTypeMap;
  }

  public constructor() {}
}
