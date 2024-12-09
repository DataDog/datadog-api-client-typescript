/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { XRayServicesIncludeAll } from "./XRayServicesIncludeAll";
import { XRayServicesIncludeOnly } from "./XRayServicesIncludeOnly";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AWS X-Ray services to collect traces from. Defaults to `include_only`.
 */

export type XRayServicesList =
  | XRayServicesIncludeAll
  | XRayServicesIncludeOnly
  | UnparsedObject;
