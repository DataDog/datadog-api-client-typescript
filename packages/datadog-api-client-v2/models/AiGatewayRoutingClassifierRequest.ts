/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Decision model and settings for a classified tier. Omission preserves the saved classifier; null clears it. Newly selected models require provider View.
 */
export class AiGatewayRoutingClassifierRequest {
  /**
   * Minimum decision confidence. Omission preserves a saved value; new classifiers and explicit null default to 0.5.
   */
  "confidenceThreshold"?: number;
  /**
   * Traffic context for the classifier. Omission preserves saved context.
   */
  "context"?: string;
  /**
   * Decision model on the provider. Omit together with provider to preserve the saved selection.
   */
  "model"?: string;
  /**
   * Decision-model provider slug. Omit together with model to preserve the saved selection.
   */
  "provider"?: string;

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
      format: "double",
    },
    context: {
      baseName: "context",
      type: "string",
    },
    model: {
      baseName: "model",
      type: "string",
    },
    provider: {
      baseName: "provider",
      type: "string",
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
    return AiGatewayRoutingClassifierRequest.attributeTypeMap;
  }

  public constructor() {}
}
