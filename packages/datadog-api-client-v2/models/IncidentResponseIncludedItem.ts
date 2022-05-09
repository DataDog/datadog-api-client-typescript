/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { User } from "./User";

import { UnparsedObject } from "../util";

/**
 * An object related to an incident that is included in the response.
 */

export type IncidentResponseIncludedItem = User | UnparsedObject;
