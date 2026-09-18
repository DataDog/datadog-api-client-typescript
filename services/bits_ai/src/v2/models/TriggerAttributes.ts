import { UnparsedObject } from "@datadog/datadog-api-client";

import { GeneralInvestigationAttributes } from "./GeneralInvestigationAttributes";
import { GeneralInvestigationTrigger } from "./GeneralInvestigationTrigger";
import { MonitorAlertTrigger } from "./MonitorAlertTrigger";
import { MonitorAlertTriggerAttributes } from "./MonitorAlertTriggerAttributes";
import { TriggerType } from "./TriggerType";

/**
 * The trigger definition for starting an investigation.
 */
export type TriggerAttributes =
  | MonitorAlertTrigger
  | GeneralInvestigationTrigger
  | UnparsedObject;
