/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamLink } from "./TeamLink";
import { User } from "./User";
import { UserTeamPermission } from "./UserTeamPermission";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Included resources related to the team
*/

export type TeamIncluded = User | TeamLink | UserTeamPermission | UnparsedObject;