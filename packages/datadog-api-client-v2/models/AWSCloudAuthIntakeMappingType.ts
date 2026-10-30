/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type identifier for AWS cloud authentication intake mapping.
 */

export type AWSCloudAuthIntakeMappingType =
  | typeof AWS_CLOUD_AUTH_INTAKE_MAPPING
  | UnparsedObject;
export const AWS_CLOUD_AUTH_INTAKE_MAPPING = "aws_cloud_auth_intake_mapping";
