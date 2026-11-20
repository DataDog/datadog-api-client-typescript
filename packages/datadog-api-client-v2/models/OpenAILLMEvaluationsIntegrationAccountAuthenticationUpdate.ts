/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication for updating the OpenAI LLM Evaluations integration account. Exactly one method is set.
 */

export type OpenAILLMEvaluationsIntegrationAccountAuthenticationUpdate =
  | OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
