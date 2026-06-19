/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type identifier for an AWS WIF intake mapping.
 */

export type AwsWifIntakeMappingType =
  | typeof AWS_WIF_INTAKE_MAPPING
  | UnparsedObject;
export const AWS_WIF_INTAKE_MAPPING = "aws_wif_intake_mapping";
