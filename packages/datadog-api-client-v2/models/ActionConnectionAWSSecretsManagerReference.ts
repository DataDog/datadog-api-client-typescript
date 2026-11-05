/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionConnectionAWSSecretsManagerType } from "./ActionConnectionAWSSecretsManagerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Reference to a string value in AWS Secrets Manager. The connection must also specify `external_secrets_manager` settings. AWS Secrets Manager references are supported for token-based credentials and HTTP authentication tokens on `DATACENTER` connections.
 */
export class ActionConnectionAWSSecretsManagerReference {
  /**
   * Top-level JSON key to extract from the secret string. Omit this field to use the entire secret string.
   */
  "key"?: string;
  /**
   * Name or ARN of the AWS Secrets Manager secret.
   */
  "secretId": string;
  /**
   * AWS Secrets Manager secret backend.
   */
  "type": ActionConnectionAWSSecretsManagerType;
  /**
   * ID of the secret version to retrieve. Cannot be used together with `version_stage`. If both are omitted, the current version is used.
   */
  "versionId"?: string;
  /**
   * Staging label of the secret version to retrieve. Cannot be used together with `version_id`. If both are omitted, the current version is used.
   */
  "versionStage"?: string;

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
    key: {
      baseName: "key",
      type: "string",
    },
    secretId: {
      baseName: "secret_id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ActionConnectionAWSSecretsManagerType",
      required: true,
    },
    versionId: {
      baseName: "version_id",
      type: "string",
    },
    versionStage: {
      baseName: "version_stage",
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
    return ActionConnectionAWSSecretsManagerReference.attributeTypeMap;
  }

  public constructor() {}
}
