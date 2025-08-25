/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAPITestStep } from "./SyntheticsAPITestStep";
import { SyntheticsAPIWaitStep } from "./SyntheticsAPIWaitStep";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The steps used in a Synthetic multi-step API test.
 */

export type SyntheticsAPIStep =
  | SyntheticsAPITestStep
  | SyntheticsAPIWaitStep
  | UnparsedObject;
