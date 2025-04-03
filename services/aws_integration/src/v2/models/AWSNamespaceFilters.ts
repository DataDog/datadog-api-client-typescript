import { UnparsedObject } from "@datadog/datadog-api-client";

import { AWSNamespaceFiltersExcludeOnly } from "./AWSNamespaceFiltersExcludeOnly";
import { AWSNamespaceFiltersIncludeOnly } from "./AWSNamespaceFiltersIncludeOnly";

/**
 * AWS Metrics namespace filters. Defaults to `exclude_only`.
 */
export type AWSNamespaceFilters =
  | AWSNamespaceFiltersExcludeOnly
  | AWSNamespaceFiltersIncludeOnly
  | UnparsedObject;
