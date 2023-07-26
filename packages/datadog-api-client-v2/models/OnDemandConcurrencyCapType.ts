/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * On-demand concurrency cap type.
 */

export type OnDemandConcurrencyCapType =
  | typeof ON_DEMAND_CONCURRENCY_CAP
  | UnparsedObject;
export const ON_DEMAND_CONCURRENCY_CAP = "on_demand_concurrency_cap";
