/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineClickhouseDestinationAuthStrategy } from "./ObservabilityPipelineClickhouseDestinationAuthStrategy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * HTTP Basic Authentication credentials for the ClickHouse destination.
 * When `strategy` is `basic`, provide `username_key` and `password_key` that reference environment variables or secrets containing the credentials.
 */
export class ObservabilityPipelineClickhouseDestinationAuth {
  /**
   * Name of the environment variable or secret that contains the ClickHouse password.
   */
  "passwordKey"?: string;
  /**
   * The authentication strategy for ClickHouse HTTP requests. Only `basic` is supported.
   */
  "strategy": ObservabilityPipelineClickhouseDestinationAuthStrategy;
  /**
   * Name of the environment variable or secret that contains the ClickHouse username.
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
      type: "ObservabilityPipelineClickhouseDestinationAuthStrategy",
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
    return ObservabilityPipelineClickhouseDestinationAuth.attributeTypeMap;
  }

  public constructor() {}
}
