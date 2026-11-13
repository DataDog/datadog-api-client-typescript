/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of a monthly resource usage record.
 */

export type MonthlyResourceType = typeof MONTHLY_RESOURCE | UnparsedObject;
export const MONTHLY_RESOURCE = "monthly_resource";
