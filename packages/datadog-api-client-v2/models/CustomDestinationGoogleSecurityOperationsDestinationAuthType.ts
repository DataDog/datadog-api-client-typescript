/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the Google Security Operations destination authentication.
 */

export type CustomDestinationGoogleSecurityOperationsDestinationAuthType =
  | typeof GCP_PRIVATE_KEY
  | UnparsedObject;
export const GCP_PRIVATE_KEY = "gcp_private_key";
