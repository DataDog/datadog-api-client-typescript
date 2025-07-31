/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfigCatCredentials } from "./ConfigCatCredentials";
import { ConfigCatIntegrationType } from "./ConfigCatIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `ConfigCatIntegration` object.
 */
export class ConfigCatIntegration {
  /**
   * The definition of the `ConfigCatCredentials` object.
   */
  "credentials": ConfigCatCredentials;
  /**
   * The definition of the `ConfigCatIntegrationType` object.
   */
  "type": ConfigCatIntegrationType;

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
      type: "ConfigCatCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfigCatIntegrationType",
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
    return ConfigCatIntegration.attributeTypeMap;
  }

  public constructor() {}
}
