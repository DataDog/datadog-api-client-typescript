/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the Cloud Cost Management tag key resource.
 */

export type CostTagKeyType = typeof COST_TAG_KEY | UnparsedObject;
export const COST_TAG_KEY = "cost_tag_key";
