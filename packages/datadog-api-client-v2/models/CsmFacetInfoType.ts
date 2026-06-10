/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The JSON:API type for facet info resources. The value should always be `facet_info`.
 */

export type CsmFacetInfoType = typeof FACET_INFO | UnparsedObject;
export const FACET_INFO = "facet_info";
