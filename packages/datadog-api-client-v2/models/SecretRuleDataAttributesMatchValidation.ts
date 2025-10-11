/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems } from "./SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems";
import { SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems } from "./SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `SecretRuleDataAttributesMatchValidation` object.
 */
export class SecretRuleDataAttributesMatchValidation {
  /**
   * The `match_validation` `endpoint`.
   */
  "endpoint"?: string;
  /**
   * The `match_validation` `hosts`.
   */
  "hosts"?: Array<string>;
  /**
   * The `match_validation` `http_method`.
   */
  "httpMethod"?: string;
  /**
   * The `match_validation` `invalid_http_status_code`.
   */
  "invalidHttpStatusCode"?: Array<SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems>;
  /**
   * The `match_validation` `request_headers`.
   */
  "requestHeaders"?: { [key: string]: string };
  /**
   * The `match_validation` `timeout_seconds`.
   */
  "timeoutSeconds"?: number;
  /**
   * The `match_validation` `type`.
   */
  "type"?: string;
  /**
   * The `match_validation` `valid_http_status_code`.
   */
  "validHttpStatusCode"?: Array<SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems>;

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
    endpoint: {
      baseName: "endpoint",
      type: "string",
    },
    hosts: {
      baseName: "hosts",
      type: "Array<string>",
    },
    httpMethod: {
      baseName: "http_method",
      type: "string",
    },
    invalidHttpStatusCode: {
      baseName: "invalid_http_status_code",
      type: "Array<SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems>",
    },
    requestHeaders: {
      baseName: "request_headers",
      type: "{ [key: string]: string; }",
    },
    timeoutSeconds: {
      baseName: "timeout_seconds",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "string",
    },
    validHttpStatusCode: {
      baseName: "valid_http_status_code",
      type: "Array<SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems>",
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
    return SecretRuleDataAttributesMatchValidation.attributeTypeMap;
  }

  public constructor() {}
}
