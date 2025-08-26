/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompletionCondition } from "./CompletionCondition";
import { RetryStrategy } from "./RetryStrategy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Used to create conditions before running subsequent actions.
 */
export class CompletionGate {
  /**
   * The definition of `CompletionCondition` object.
   */
  "completionCondition": CompletionCondition;
  /**
   * The definition of `RetryStrategy` object.
   */
  "retryStrategy": RetryStrategy;

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
    completionCondition: {
      baseName: "completionCondition",
      type: "CompletionCondition",
      required: true,
    },
    retryStrategy: {
      baseName: "retryStrategy",
      type: "RetryStrategy",
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
    return CompletionGate.attributeTypeMap;
  }

  public constructor() {}
}
