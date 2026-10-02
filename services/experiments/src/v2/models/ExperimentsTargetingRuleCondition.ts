import { UnparsedObject } from "@datadog/datadog-api-client";

import { ExperimentsInlineCondition } from "./ExperimentsInlineCondition";
import { ExperimentsSavedFilterCondition } from "./ExperimentsSavedFilterCondition";

/**
 * A saved-filter condition or a complete inline condition. The two forms cannot be combined.
 */
export type ExperimentsTargetingRuleCondition =
  | ExperimentsSavedFilterCondition
  | ExperimentsInlineCondition
  | UnparsedObject;
