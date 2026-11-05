/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AWS Secrets Manager secret backend.
 */

export type ActionConnectionAWSSecretsManagerType =
  | typeof AWS_SECRETS_MANAGER
  | UnparsedObject;
export const AWS_SECRETS_MANAGER = "aws_secrets_manager";
