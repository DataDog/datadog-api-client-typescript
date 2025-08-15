/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeminiCredentials } from "./GeminiCredentials";
import { GeminiIntegrationType } from "./GeminiIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `GeminiIntegration` object.
 */
export class GeminiIntegration {
  /**
   * The definition of the `GeminiCredentials` object.
   */
  "credentials": GeminiCredentials;
  /**
   * The definition of the `GeminiIntegrationType` object.
   */
  "type": GeminiIntegrationType;

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
      type: "GeminiCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GeminiIntegrationType",
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
    return GeminiIntegration.attributeTypeMap;
  }

  public constructor() {}
}
