/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardInvitesData } from "./SharedDashboardInvitesData";
import { SharedDashboardInvitesMeta } from "./SharedDashboardInvitesMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Invitations data and metadata that exists for a shared dashboard returned by the API.
 */
export class SharedDashboardInvites {
  /**
   * An object or list of objects containing the information for an invitation to a shared dashboard.
   */
  "data": SharedDashboardInvitesData;
  /**
   * Pagination metadata returned by the API.
   */
  "meta"?: SharedDashboardInvitesMeta;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "SharedDashboardInvitesData",
      required: true,
    },
    meta: {
      type: "SharedDashboardInvitesMeta",
    },
  };
}
