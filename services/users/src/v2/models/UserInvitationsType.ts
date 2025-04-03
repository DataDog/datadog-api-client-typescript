import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * User invitations type.
 */
export type UserInvitationsType = typeof USER_INVITATIONS | UnparsedObject;
export const USER_INVITATIONS = "user_invitations";
