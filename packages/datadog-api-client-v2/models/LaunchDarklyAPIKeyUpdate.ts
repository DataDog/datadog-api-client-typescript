/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LaunchDarklyAPIKeyType } from "./LaunchDarklyAPIKeyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `LaunchDarklyAPIKey` object.
 */
export class LaunchDarklyAPIKeyUpdate {
  /**
   * The `LaunchDarklyAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: string;
  /**
   * The definition of the `LaunchDarklyAPIKey` object.
   */
  "type": LaunchDarklyAPIKeyType;

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
    apiToken: {
      baseName: "api_token",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LaunchDarklyAPIKeyType",
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
    return LaunchDarklyAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
