/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardInvitesDataObject } from "./SharedDashboardInvitesDataObject";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An object or list of objects containing the information for an invitation to a shared dashboard.
 */

export type SharedDashboardInvitesData =
  | SharedDashboardInvitesDataObject
  | Array<SharedDashboardInvitesDataObject>
  | UnparsedObject;
