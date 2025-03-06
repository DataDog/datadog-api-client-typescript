/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetryStrategy } from "./RetryStrategy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Used to handle errors in an action.
 */
export class ErrorHandler {
  /**
   * The `ErrorHandler` `fallbackStepName`.
   */
  "fallbackStepName": string;
  /**
   * The definition of `RetryStrategy` object.
   */
  "retryStrategy": RetryStrategy;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fallbackStepName: {
      baseName: "fallbackStepName",
      type: "string",
      required: true,
    },
    retryStrategy: {
      baseName: "retryStrategy",
      type: "RetryStrategy",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ErrorHandler.attributeTypeMap;
  }

  public constructor() {}
}
