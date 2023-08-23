/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardInvitesMetaPage } from "./SharedDashboardInvitesMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination metadata returned by the API.
 */
export class SharedDashboardInvitesMeta {
  /**
   * Object containing the total count of invitations across all pages
   */
  "page"?: SharedDashboardInvitesMetaPage;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      baseName: "page",
      type: "SharedDashboardInvitesMetaPage",
    },
  };
}
