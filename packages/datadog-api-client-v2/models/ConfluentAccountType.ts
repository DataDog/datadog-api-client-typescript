/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The JSON:API type for this API. Should always be `confluent-cloud-accounts`.
 */

export type ConfluentAccountType =
  | typeof CONFLUENT_CLOUD_ACCOUNTS
  | UnparsedObject;
export const CONFLUENT_CLOUD_ACCOUNTS = "confluent-cloud-accounts";
