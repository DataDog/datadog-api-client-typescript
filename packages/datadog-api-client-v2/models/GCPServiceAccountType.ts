/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of account.
 */

export type GCPServiceAccountType = typeof GCP_SERVICE_ACCOUNT | UnparsedObject;
export const GCP_SERVICE_ACCOUNT = "gcp_service_account";
