import { UnparsedObject } from "@datadog/datadog-api-client";

import { IncidentNotificationTemplateObject } from "./IncidentNotificationTemplateObject";
import { IncidentTypeObject } from "./IncidentTypeObject";
import { User } from "./User";

/**
 * Objects related to a notification rule.
 */
export type IncidentNotificationRuleIncludedItems =
  | User
  | IncidentTypeObject
  | IncidentNotificationTemplateObject
  | UnparsedObject;
