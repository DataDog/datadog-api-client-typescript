/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsInlineCondition } from "./ExperimentsInlineCondition";
import { ExperimentsSavedFilterCondition } from "./ExperimentsSavedFilterCondition";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A saved-filter condition or a complete inline condition. The two forms cannot be combined.
 */

export type ExperimentsTargetingRuleCondition =
  | ExperimentsSavedFilterCondition
  | ExperimentsInlineCondition
  | UnparsedObject;
