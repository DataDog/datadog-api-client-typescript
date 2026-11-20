import { UnparsedObject } from "@datadog/datadog-api-client";

import { RUMRecoveryBatchCreateAttributes } from "./RUMRecoveryBatchCreateAttributes";
import { RUMRecoverySessionsCreateAttributes } from "./RUMRecoverySessionsCreateAttributes";

/**
 * Targeted recovery (the default) or query-based batch recovery.
 */
export type RUMRecoveryCreateAttributes =
  | RUMRecoverySessionsCreateAttributes
  | RUMRecoveryBatchCreateAttributes
  | UnparsedObject;
