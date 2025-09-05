import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentTypeObject } from "./IncidentTypeObject";
import { User } from "./User";

/**
 * Objects related to a notification template.
 */
export type IncidentNotificationTemplateIncludedItems =
  | User
  | IncidentTypeObject
  | UnparsedObject;
