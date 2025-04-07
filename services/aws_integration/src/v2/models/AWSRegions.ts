import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSRegionsIncludeAll } from "./AWSRegionsIncludeAll";
import { AWSRegionsIncludeOnly } from "./AWSRegionsIncludeOnly";

/**
 * AWS Regions to collect data from. Defaults to `include_all`.
 */
export type AWSRegions =
  | AWSRegionsIncludeAll
  | AWSRegionsIncludeOnly
  | UnparsedObject;
