/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AIGuardEvaluateAttributesResponse } from "./AIGuardEvaluateAttributesResponse";
import { AIGuardEvaluationType } from "./AIGuardEvaluationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API evaluation resource.
 */
export class AIGuardEvaluateDataResponse {
  /**
   * The evaluation result with the recommended action and detected threat information.
   */
  "attributes": AIGuardEvaluateAttributesResponse;
  /**
   * The unique identifier of the evaluation.
   */
  "id": string;
  /**
   * The JSON:API resource type for AI Guard evaluation requests and responses.
   * Its value is `evaluations` for the action endpoint `/api/v2/ai-guard/evaluate`.
   */
  "type": AIGuardEvaluationType;

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
      type: "AIGuardEvaluateAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AIGuardEvaluationType",
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
    return AIGuardEvaluateDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
