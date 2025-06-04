import { UnparsedObject } from "@datadog/datadog-api-client";

import { Escalation } from "./Escalation";
import { User } from "./User";

/**
 * Represents an union of related resources included in the response, such as users and escalation steps.
 */
export type TeamOnCallRespondersIncluded = User | Escalation | UnparsedObject;
