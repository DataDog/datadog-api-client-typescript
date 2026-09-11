import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action to take when the quota or bucket limit is exceeded. Options:
 * - `drop`: Drop the event.
 * - `no_action`: Let the event pass through.
 * - `overflow_routing`: Route to an overflow destination.
 *
 * When `overflow_routing` is used, there must be a destination whose `inputs` reference this processor with the `<processor-id>.overflow_events` suffix to route the overflowing events. Only the following destination types support overflow inputs: `amazon_s3_generic`, `amazon_s3`, `google_cloud_storage`, and `azure_storage`.
 */
export type ObservabilityPipelineQuotaProcessorOverflowAction =
  | typeof DROP
  | typeof NO_ACTION
  | typeof OVERFLOW_ROUTING
  | UnparsedObject;
export const DROP = "drop";
export const NO_ACTION = "no_action";
export const OVERFLOW_ROUTING = "overflow_routing";
