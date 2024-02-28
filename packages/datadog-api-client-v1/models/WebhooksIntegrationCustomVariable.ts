/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom variable for Webhook integration.
 */
export class WebhooksIntegrationCustomVariable {
  /**
   * Make custom variable is secret or not.
   * If the custom variable is secret, the value is not returned in the response payload.
   */
  "isSecret": boolean;
  /**
   * The name of the variable. It corresponds with `<CUSTOM_VARIABLE_NAME>`.
   */
  "name": string;
  /**
   * Value of the custom variable.
   */
  "value": string;

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
    isSecret: {
      baseName: "is_secret",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
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
    return WebhooksIntegrationCustomVariable.attributeTypeMap;
  }

  public constructor() {}
}
