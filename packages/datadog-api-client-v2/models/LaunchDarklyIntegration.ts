/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LaunchDarklyCredentials } from "./LaunchDarklyCredentials";
import { LaunchDarklyIntegrationType } from "./LaunchDarklyIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `LaunchDarklyIntegration` object.
 */
export class LaunchDarklyIntegration {
  /**
   * The definition of the `LaunchDarklyCredentials` object.
   */
  "credentials": LaunchDarklyCredentials;
  /**
   * The definition of the `LaunchDarklyIntegrationType` object.
   */
  "type": LaunchDarklyIntegrationType;

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
      type: "LaunchDarklyCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LaunchDarklyIntegrationType",
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
    return LaunchDarklyIntegration.attributeTypeMap;
  }

  public constructor() {}
}
