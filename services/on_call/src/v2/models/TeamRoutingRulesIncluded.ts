import { UnparsedObject } from "@datadog/datadog-api-client";

import { RoutingRule } from "./RoutingRule";

/**
 * Represents additional included resources for team routing rules, such as associated routing rules.
 */
export type TeamRoutingRulesIncluded = RoutingRule | UnparsedObject;
