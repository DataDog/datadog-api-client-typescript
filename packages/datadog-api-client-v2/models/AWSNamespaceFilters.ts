/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSNamespaceFiltersExcludeOnly } from "./AWSNamespaceFiltersExcludeOnly";
import { AWSNamespaceFiltersIncludeOnly } from "./AWSNamespaceFiltersIncludeOnly";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AWS Metrics namespace filters. Defaults to `exclude_only`.
 */

export type AWSNamespaceFilters =
  | AWSNamespaceFiltersExcludeOnly
  | AWSNamespaceFiltersIncludeOnly
  | UnparsedObject;
