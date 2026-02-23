import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy } from "./ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy";

/**
 * Authentication settings for the Elasticsearch destination.
 * When `strategy` is `basic`, use `username_key` and `password_key` to reference credentials stored in environment variables or secrets.
 */
export class ObservabilityPipelineElasticsearchDestinationAuth {
  /**
   * Name of the environment variable or secret that holds the Elasticsearch password (used when `strategy` is `basic`).
   */
  "passwordKey"?: string;
  /**
   * The authentication strategy to use.
   */
  "strategy": ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy;
  /**
   * Name of the environment variable or secret that holds the Elasticsearch username (used when `strategy` is `basic`).
   */
  "usernameKey"?: string;
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
    passwordKey: {
      baseName: "password_key",
      type: "string",
    },
    strategy: {
      baseName: "strategy",
      type: "ObservabilityPipelineAmazonOpenSearchDestinationAuthStrategy",
      required: true,
    },
    usernameKey: {
      baseName: "username_key",
      type: "string",
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
    return ObservabilityPipelineElasticsearchDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
