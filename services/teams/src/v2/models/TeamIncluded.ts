import { UnparsedObject } from "@datadog/datadog-api-client";

import { TeamLink } from "./TeamLink";
import { User } from "./User";
import { UserTeamPermission } from "./UserTeamPermission";

/**
 * Included resources related to the team
 */
export type TeamIncluded =
  | User
  | TeamLink
  | UserTeamPermission
  | UnparsedObject;
