/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnthropicCredentials } from "./AnthropicCredentials";
import { AnthropicIntegrationType } from "./AnthropicIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `AnthropicIntegration` object.
 */
export class AnthropicIntegration {
  /**
   * The definition of the `AnthropicCredentials` object.
   */
  "credentials": AnthropicCredentials;
  /**
   * The definition of the `AnthropicIntegrationType` object.
   */
  "type": AnthropicIntegrationType;

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
    credentials: {
      baseName: "credentials",
      type: "AnthropicCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AnthropicIntegrationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AnthropicIntegration.attributeTypeMap;
  }

  public constructor() {}
}
