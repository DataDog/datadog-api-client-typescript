/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMRecoveryBatchCreateAttributes } from "./RUMRecoveryBatchCreateAttributes";
import { RUMRecoverySessionsCreateAttributes } from "./RUMRecoverySessionsCreateAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Targeted recovery (the default) or query-based batch recovery.
 */

export type RUMRecoveryCreateAttributes =
  | RUMRecoverySessionsCreateAttributes
  | RUMRecoveryBatchCreateAttributes
  | UnparsedObject;
