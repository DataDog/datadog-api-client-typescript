/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Identifier of an Elastic Cloud CCM dataflow.
 */

export type ElasticCloudCcmDataflowId = typeof COST_DATA | UnparsedObject;
export const COST_DATA = "elastic-cloud-cost-data";
