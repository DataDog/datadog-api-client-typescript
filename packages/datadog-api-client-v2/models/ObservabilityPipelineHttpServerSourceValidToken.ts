/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineHttpServerSourceValidTokenPathToToken } from "./ObservabilityPipelineHttpServerSourceValidTokenPathToToken";
import { ObservabilityPipelineSourceValidTokenFieldToAdd } from "./ObservabilityPipelineSourceValidTokenFieldToAdd";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An accepted token used to authenticate incoming HTTP server requests.
 */
export class ObservabilityPipelineHttpServerSourceValidToken {
  /**
   * Indicates whether this token is currently accepted. Disabled tokens are rejected without
   * being removed from the configuration.
   */
  "enabled"?: boolean;
  /**
   * An optional metadata field that is attached to every event authenticated by the
   * associated token. Both `key` and `value` must match `^[A-Za-z0-9_]+$`.
   */
  "fieldToAdd"?: ObservabilityPipelineSourceValidTokenFieldToAdd;
  /**
   * Specifies where the worker extracts the token from in the incoming HTTP request.
   * This can be either a built-in location (`path` or `address`) or an HTTP header object.
   */
  "pathToToken"?: ObservabilityPipelineHttpServerSourceValidTokenPathToToken;
  /**
   * Name of the environment variable or secret that holds the expected token value.
   */
  "tokenKey": string;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    fieldToAdd: {
      baseName: "field_to_add",
      type: "ObservabilityPipelineSourceValidTokenFieldToAdd",
    },
    pathToToken: {
      baseName: "path_to_token",
      type: "ObservabilityPipelineHttpServerSourceValidTokenPathToToken",
    },
    tokenKey: {
      baseName: "token_key",
      type: "string",
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
    return ObservabilityPipelineHttpServerSourceValidToken.attributeTypeMap;
  }

  public constructor() {}
}
