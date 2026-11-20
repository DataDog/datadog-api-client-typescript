import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";

/**
 * Organization usage metrics under the `openai.*` namespace, such as `openai.completions.*`, `openai.embeddings.*`, `openai.images.*`, `openai.moderations.*`, `openai.audio_speeches.*`, `openai.audio_transcriptions.*`, `openai.code_interpreter_sessions.*`, and `openai.vector_stores.*`. This dataflow is always on and cannot be turned off, so it appears only in responses.
 */
export class OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Always `true`, because this collection cannot be turned off.
   */
  "enabled"?: boolean;
  /**
   * Read-only collection status of a dataflow.
   */
  "status"?: IntegrationAccountDataflowStatus;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    status: {
      baseName: "status",
      type: "IntegrationAccountDataflowStatus",
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
    return OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
