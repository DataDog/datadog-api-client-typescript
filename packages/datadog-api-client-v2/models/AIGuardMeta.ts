/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Optional metadata providing context about the originating service and request.
 */
export class AIGuardMeta {
  /**
   * Identifier of the coding agent sending the request, if applicable.
   */
  "codingAgent"?: string;
  /**
   * Override for the default threat detection confidence threshold, between 0.0 and 1.0.
   */
  "confidenceThreshold"?: number;
  /**
   * The deployment environment of the originating service.
   */
  "env"?: string;
  /**
   * Override whether sensitive data scanning is applied to this request.
   */
  "isSdsEnabledOverride"?: boolean;
  /**
   * The name of the service sending the evaluation request.
   */
  "service"?: string;

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
    codingAgent: {
      baseName: "coding_agent",
      type: "string",
    },
    confidenceThreshold: {
      baseName: "confidence_threshold",
      type: "number",
      format: "double",
    },
    env: {
      baseName: "env",
      type: "string",
    },
    isSdsEnabledOverride: {
      baseName: "is_sds_enabled_override",
      type: "boolean",
    },
    service: {
      baseName: "service",
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
    return AIGuardMeta.attributeTypeMap;
  }

  public constructor() {}
}
