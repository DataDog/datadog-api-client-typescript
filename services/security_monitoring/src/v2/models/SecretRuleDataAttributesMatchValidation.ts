import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems } from "./SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems";
import { SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems } from "./SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems";

/**
 * Configuration for validating whether a detected secret is active by making an HTTP request and inspecting the response.
 */
export class SecretRuleDataAttributesMatchValidation {
  /**
   * The URL endpoint to call when validating a detected secret.
   */
  "endpoint"?: string;
  /**
   * The list of hostnames to include when performing secret match validation.
   */
  "hosts"?: Array<string>;
  /**
   * The HTTP method (e.g., GET, POST) to use when making the validation request.
   */
  "httpMethod"?: string;
  /**
   * The HTTP status code ranges that indicate the detected secret is invalid or inactive.
   */
  "invalidHttpStatusCode"?: Array<SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems>;
  /**
   * A map of HTTP header names to values to include in the validation request.
   */
  "requestHeaders"?: { [key: string]: string };
  /**
   * The maximum number of seconds to wait for a response during validation before timing out.
   */
  "timeoutSeconds"?: number;
  /**
   * The type of match validation to perform (e.g., http).
   */
  "type"?: string;
  /**
   * The HTTP status code ranges that indicate the detected secret is valid and active.
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
