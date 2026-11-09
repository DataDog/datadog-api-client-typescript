/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Decision model of a classified tier.
 */
export class AiGatewayRoutingRuleClassifier {
  /**
   * Probability from 0 to 1 that the picked destination must reach. Below it, the request goes to the default destination.
   */
  "confidenceThreshold": number;
  /**
   * Prompt that tells the decision model about the rule's traffic. Omitted when empty.
   */
  "context"?: string;
  /**
   * Canonical name of the decision model. Empty when the caller cannot view its provider.
   */
  "model": string;
  /**
   * Slug of the provider that serves the decision model. Empty when the caller cannot view the provider.
   */
  "provider": string;

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
    confidenceThreshold: {
      baseName: "confidence_threshold",
      type: "number",
      required: true,
      format: "double",
    },
    context: {
      baseName: "context",
      type: "string",
    },
    model: {
      baseName: "model",
      type: "string",
      required: true,
    },
    provider: {
      baseName: "provider",
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
    return AiGatewayRoutingRuleClassifier.attributeTypeMap;
  }

  public constructor() {}
}
