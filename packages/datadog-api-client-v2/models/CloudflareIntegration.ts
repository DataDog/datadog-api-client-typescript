/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareCredentials } from "./CloudflareCredentials";
import { CloudflareIntegrationType } from "./CloudflareIntegrationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `CloudflareIntegration` object.
 */
export class CloudflareIntegration {
  /**
   * The definition of the `CloudflareCredentials` object.
   */
  "credentials": CloudflareCredentials;
  /**
   * The definition of the `CloudflareIntegrationType` object.
   */
  "type": CloudflareIntegrationType;

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
      type: "CloudflareCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudflareIntegrationType",
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
    return CloudflareIntegration.attributeTypeMap;
  }

  public constructor() {}
}
