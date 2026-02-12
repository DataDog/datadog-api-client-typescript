import { UnparsedObject } from "@datadog/datadog-api-client";

import { SLOCountSpec } from "./SLOCountSpec";
import { SLOTimeSliceSpec } from "./SLOTimeSliceSpec";

/**
 * A generic SLI specification. This is used for time-slice and count-based (metric) SLOs only.
 */
export type SLOSliSpec = SLOTimeSliceSpec | SLOCountSpec | UnparsedObject;
