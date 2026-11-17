import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { GeneralInvestigationTrigger } from "./GeneralInvestigationTrigger";
import { MonitorAlertTrigger } from "./MonitorAlertTrigger";

/**
 * The trigger definition for starting an investigation.
 */
export type TriggerAttributes =
  | MonitorAlertTrigger
  | GeneralInvestigationTrigger
  | UnparsedObject;
