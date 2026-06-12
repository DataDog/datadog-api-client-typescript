/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for global user organizations.
 */

export type GlobalOrgType = typeof GLOBAL_USER_ORGS | UnparsedObject;
export const GLOBAL_USER_ORGS = "global_user_orgs";
