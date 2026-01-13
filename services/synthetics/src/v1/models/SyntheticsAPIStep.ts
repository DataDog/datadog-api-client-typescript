import { UnparsedObject } from "@datadog/datadog-api-client";

import { SyntheticsAPISubtestStep } from "./SyntheticsAPISubtestStep";
import { SyntheticsAPITestStep } from "./SyntheticsAPITestStep";
import { SyntheticsAPIWaitStep } from "./SyntheticsAPIWaitStep";

/**
 * The steps used in a Synthetic multi-step API test.
 */
export type SyntheticsAPIStep =
  | SyntheticsAPITestStep
  | SyntheticsAPIWaitStep
  | SyntheticsAPISubtestStep
  | UnparsedObject;
