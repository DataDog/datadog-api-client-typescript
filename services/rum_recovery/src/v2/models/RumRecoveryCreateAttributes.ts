import { UnparsedObject } from "@datadog/datadog-api-client";

import { RumRecoveryBatchCreateAttributes } from "./RumRecoveryBatchCreateAttributes";
import { RumRecoverySessionsCreateAttributes } from "./RumRecoverySessionsCreateAttributes";

/**
 * Targeted recovery (the default) or query-based batch recovery.
 */
export type RumRecoveryCreateAttributes =
  | RumRecoverySessionsCreateAttributes
  | RumRecoveryBatchCreateAttributes
  | UnparsedObject;
