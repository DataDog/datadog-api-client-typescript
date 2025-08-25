/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Escalation } from "./Escalation";
import { User } from "./User";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Represents an union of related resources included in the response, such as users and escalation steps.
 */

export type TeamOnCallRespondersIncluded = User | Escalation | UnparsedObject;
