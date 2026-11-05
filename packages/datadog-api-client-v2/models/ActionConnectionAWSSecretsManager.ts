/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionConnectionAWSSecretsManagerType } from "./ActionConnectionAWSSecretsManagerType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Secrets Manager settings shared by the credential references on a `DATACENTER` connection. These settings are required whenever a field uses an AWS Secrets Manager reference.
 */
export class ActionConnectionAWSSecretsManager {
  /**
   * ID of the AWS connection used to retrieve secrets. This connection must be in the same Datadog organization.
   */
  "connectionId": string;
  /**
   * AWS region containing the referenced secrets.
   */
  "region": string;
  /**
   * AWS Secrets Manager secret backend.
   */
  "type": ActionConnectionAWSSecretsManagerType;

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
    connectionId: {
      baseName: "connection_id",
      type: "string",
      required: true,
    },
    region: {
      baseName: "region",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ActionConnectionAWSSecretsManagerType",
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
    return ActionConnectionAWSSecretsManager.attributeTypeMap;
  }

  public constructor() {}
}
