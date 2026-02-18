import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Seat users resource type.
 */
export type SeatUserDataType = typeof SEAT_USERS | UnparsedObject;
export const SEAT_USERS = "seat-users";
