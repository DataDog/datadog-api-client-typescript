/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { User } from "./User";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An object related to an incident team which is present in the included payload.
 */

export type IncidentTeamIncludedItems = User | UnparsedObject;
