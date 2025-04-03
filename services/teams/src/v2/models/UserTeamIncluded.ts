import { UnparsedObject } from "@datadog/datadog-api-client";

import { Team } from "./Team";
import { User } from "./User";

/**
 * Included resources related to the team membership
 */
export type UserTeamIncluded = User | Team | UnparsedObject;
