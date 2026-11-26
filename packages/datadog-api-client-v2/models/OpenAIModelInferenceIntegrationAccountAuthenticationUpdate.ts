/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAIModelInferenceIntegrationAccountBearerTokenAuthUpdate } from "./OpenAIModelInferenceIntegrationAccountBearerTokenAuthUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication for updating the OpenAI Model Inference integration account. Set exactly one method.
 */

export type OpenAIModelInferenceIntegrationAccountAuthenticationUpdate =
  | OpenAIModelInferenceIntegrationAccountBearerTokenAuthUpdate
  | UnparsedObject;
