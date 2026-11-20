import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountType } from "./IntegrationAccountType";
import { OpenAILLMEvaluationsIntegrationAccountCreateAttributes } from "./OpenAILLMEvaluationsIntegrationAccountCreateAttributes";

/**
 * Data envelope for creating an OpenAI LLM Evaluations integration account.
 */
export class OpenAILLMEvaluationsIntegrationAccountCreateData {
  /**
   * Writable attributes used to create an OpenAI LLM Evaluations integration account.
   */
  "attributes": OpenAILLMEvaluationsIntegrationAccountCreateAttributes;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;
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
      type: "OpenAILLMEvaluationsIntegrationAccountCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return OpenAILLMEvaluationsIntegrationAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
