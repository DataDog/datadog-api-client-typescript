/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Update request of a custom variable object.
 *
 * *All properties are optional.*
 */
export class WebhooksIntegrationCustomVariableUpdateRequest {
  /**
   * Make custom variable is secret or not.
   * If the custom variable is secret, the value is not returned in the response payload.
   */
  "isSecret"?: boolean;
  /**
   * The name of the variable. It corresponds with `<CUSTOM_VARIABLE_NAME>`. It must only contains upper-case characters, integers or underscores.
   */
  "name"?: string;
  /**
   * Value of the custom variable.
   */
  "value"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    isSecret: {
      baseName: "is_secret",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WebhooksIntegrationCustomVariableUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
