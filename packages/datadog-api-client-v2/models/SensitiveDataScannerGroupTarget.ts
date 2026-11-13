/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Datadog product whose scanning groups are served by the target-scoped group routes.
 */

export type SensitiveDataScannerGroupTarget =
  | typeof LLM_OBSERVABILITY
  | UnparsedObject;
export const LLM_OBSERVABILITY = "llm_observability";
