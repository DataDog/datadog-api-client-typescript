/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The JSON:API resource type for AI Guard evaluation requests and responses.
 * Its value is `evaluations` for the action endpoint `/api/v2/ai-guard/evaluate`.
 */

export type AIGuardEvaluationType = typeof EVALUATIONS | UnparsedObject;
export const EVALUATIONS = "evaluations";
