import { UnparsedObject } from "@datadog/datadog-api-client";

import { XRayServicesIncludeAll } from "./XRayServicesIncludeAll";
import { XRayServicesIncludeOnly } from "./XRayServicesIncludeOnly";

/**
 * AWS X-Ray services to collect traces from. Defaults to `include_only`.
 */
export type XRayServicesList =
  | XRayServicesIncludeAll
  | XRayServicesIncludeOnly
  | UnparsedObject;
