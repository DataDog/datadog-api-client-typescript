/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookTemplateVariableAvailableValuesQueryLogRumSpans } from "./NotebookTemplateVariableAvailableValuesQueryLogRumSpans";
import { NotebookTemplateVariableAvailableValuesQueryMetrics } from "./NotebookTemplateVariableAvailableValuesQueryMetrics";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Query used to dynamically populate the list of available values for the template variable.
 */

export type NotebookTemplateVariableAvailableValuesQuery =
  | NotebookTemplateVariableAvailableValuesQueryLogRumSpans
  | NotebookTemplateVariableAvailableValuesQueryMetrics
  | UnparsedObject;
